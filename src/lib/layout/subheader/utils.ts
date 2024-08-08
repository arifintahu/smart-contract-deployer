import type { SubHeaderMenuInfo } from './types'

export const getSubHeader = () => {
  const base: SubHeaderMenuInfo[] = [
    { name: 'Overview', slug: '/', icon: 'home' },
  ]

  return base
}
