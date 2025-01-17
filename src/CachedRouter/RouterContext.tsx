import { type ComponentType, createContext, useContext } from 'react'
import { CachedRoute } from '../types'

interface CachedRouterContextProps {
  path: string
  setPath: (path: string) => void
  cachedRoutes: CachedRoute[]
  setCachedRoutes: (cachedRoutes: CachedRoute[]) => void
  currentRoute: CachedRoute
  LazyFallback?: ComponentType
}

export const CachedRouterContext = createContext<CachedRouterContextProps>(
  {} as CachedRouterContextProps
)

export const useCachedRouterContext = () => useContext(CachedRouterContext)
