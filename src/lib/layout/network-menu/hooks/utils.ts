import type { ChainInfo, ChainType, Option } from '@/lib/types'

export const filterChains = (
  chainInfos: ChainInfo[],
  keyword: string,
  type?: ChainType
) => {
  const chainInfosByType = chainInfos.filter((item) => item.type === type)
  const filteredKeyword = chainInfosByType.filter(
    (item) =>
      !keyword ||
      item.name.toLowerCase().includes(keyword.toLowerCase()) ||
      item.chainName.toLowerCase().includes(keyword.toLowerCase())
  )

  return filteredKeyword
}

export const getNextCursor = (
  key: string,
  current: Option<number>,
  lastIndex: number
) => {
  switch (key) {
    case 'ArrowUp':
      if (current === undefined) return lastIndex
      return current <= 0 ? lastIndex : current - 1
    case 'ArrowDown':
      if (current === undefined) return 0
      return current >= lastIndex ? 0 : current + 1
    default:
      return undefined
  }
}
