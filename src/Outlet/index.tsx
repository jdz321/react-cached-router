import React, { type FC, Suspense } from 'react';
import { RouteContext } from '../CachedRouter/RouteContext';
import { useCachedRouterContext } from '../CachedRouter/RouterContext';

export const Outlet: FC = () => {
  const { path, cachedRoutes, LazyFallback } = useCachedRouterContext();
  return cachedRoutes.map((item) => {
    const show = item.path === path;
    return (
      <RouteContext.Provider value={item} key={item.path}>
        <Suspense fallback={LazyFallback && <LazyFallback />}>
          {item.ignoreCache && show && item.element}
          {!item.ignoreCache && (
            <div style={{ display: show ? 'block' : 'none' }}>
              {item.element}
            </div>
          )}
        </Suspense>
      </RouteContext.Provider>
    );
  });
};
