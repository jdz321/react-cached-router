import type { ComponentType, ReactElement } from 'react'
import type { match } from 'path-to-regexp'

export interface RouteItem {
  name: string
  path: string
  component: ComponentType
  ignoreCache?: boolean
}

export interface CachedRoute extends RouteItem {
  element: ReactElement
  match: ReturnType<typeof match>
  params: Record<string, string | string[] | undefined>
  query: Record<string, string>
}