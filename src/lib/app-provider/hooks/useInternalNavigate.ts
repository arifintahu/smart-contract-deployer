import { useRouter } from 'next/router'
import type { Router } from 'next/router'
import type { ParsedUrlQueryInput } from 'node:querystring'
import { useCallback } from 'react'

export interface NavigationArgs {
  pathname: string
  query?: ParsedUrlQueryInput
  options?: Parameters<Pick<Router, 'push'>['push']>[2]
  replace?: boolean
}

export const useInternalNavigate = () => {
  const router = useRouter()

  return useCallback(
    ({
      pathname,
      query = {},
      options = {},
      replace = false,
    }: NavigationArgs) => {
      const routerFn = replace ? router.replace : router.push
      routerFn(
        {
          pathname: `${pathname}`,
          query: {
            ...query,
          },
        },
        undefined,
        options
      )
    },
    [router.push, router.query.network, router.replace]
  )
}
