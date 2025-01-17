import { match } from 'path-to-regexp';
import type { ComponentType, FC, ReactElement, ReactNode } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import { useRoute } from './RouteContext';
import { CachedRouterContext } from './RouterContext';
import { RouteItem } from '../types'

interface CachedRoute extends RouteItem {
  element: ReactElement;
  match: ReturnType<typeof match>;
  params: Record<string, string | string[] | undefined>;
  query: Record<string, string>;
}

export interface CachedRouterProps {
  router: RouteItem[];
  children: ReactNode;
  defaultPath?: string;
  LazyFallback?: ComponentType;
}

type RouterConfig = CachedRouterProps['router'][number] & {
  match: ReturnType<typeof match>;
};

function matchRoute(fullPath: string, routeConfigs: RouterConfig[]) {
  for (const route of routeConfigs) {
    const [path, search] = fullPath.split('?');
    const result = route.match(path);
    if (result) {
      return {
        ...route,
        params: result.params,
        query: Object.fromEntries(new URLSearchParams(search).entries()),
      };
    }
  }
}

const CachedRouter: FC<CachedRouterProps> = ({
  router,
  defaultPath = '/',
  children,
  LazyFallback,
}) => {
  const [path, setPath] = useState(defaultPath);
  const routerConfig: RouterConfig[] = useMemo(() => {
    return router.map((item) => ({
      ...item,
      match: match(item.path),
    }));
  }, [router]);

  const [cachedRoutes, setCachedRoutes] = useState<CachedRoute[]>([]);
  const cachedRouteMap = useMemo(() => {
    return cachedRoutes.reduce((acc, cur) => {
      acc[cur.path] = cur;
      return acc;
    }, {} as Record<string, CachedRoute>);
  }, [cachedRoutes]);

  useEffect(() => {
    if (path in cachedRouteMap) {
      return;
    }
    const route = matchRoute(path, routerConfig);
    if (!route) {
      return;
    }
    setCachedRoutes([
      ...cachedRoutes,
      {
        ...route,
        path,
        element: <route.component />,
      },
    ]);
  }, [router, path]);
  return (
    <CachedRouterContext.Provider
      value={{
        path,
        setPath,
        cachedRoutes,
        setCachedRoutes,
        currentRoute: cachedRouteMap[path],
        LazyFallback,
      }}
    >
      {children}
    </CachedRouterContext.Provider>
  );
};

export default CachedRouter;

export function useParams<T = Record<string, string>>() {
  const { params } = useRoute();
  return params as T;
}
