import { createContext, useContext } from 'react'
import { CachedRoute } from '../types'
import { useCachedRouterContext } from './RouterContext'

export const RouteContext = createContext<CachedRoute>({} as CachedRoute)

export const useRoute = () => {
  const route = useContext(RouteContext)
  const { setPath, setCachedRoutes, cachedRoutes } = useCachedRouterContext()
  const redirectTo = (path: string) => {
    setCachedRoutes(cachedRoutes.filter((item) => item.path !== route.path))
    setPath(path)
  }
  const updateRouteName = (name: string) => {
    setCachedRoutes(
      cachedRoutes.map((item) => {
        if (item.path === route.path) {
          return {
            ...item,
            name,
          }
        }
        return item
      })
    )
  }
  return {
    ...route,
    setPath,
    redirectTo,
    updateRouteName,
  }
}
