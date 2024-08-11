import { isUndefined } from 'lodash'
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'
import { useCallback, useMemo, useState } from 'react'

import { filterChains, getNextCursor } from './utils'
import { allChainsArray } from '@/lib/data/chains'
import { ChainType } from '@/lib/types'

export const useNetworkSelector = (onClose: () => void) => {
  const [keyword, setKeyword] = useState('')
  const [cursor, setCursor] = useState<number>()

  const [filteredMainnetChains, filteredTestnetChains, filteredLocalChains] =
    useMemo(
      () => [
        filterChains(allChainsArray, keyword, ChainType.Mainnet),
        filterChains(allChainsArray, keyword, ChainType.Testnet),
        filterChains(allChainsArray, keyword, ChainType.Local),
      ],
      [allChainsArray, keyword]
    )

  const totalNetworks =
    filteredMainnetChains.length +
    filteredTestnetChains.length +
    filteredLocalChains.length

  const handleOnKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (!totalNetworks) return
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown': {
          e.preventDefault()
          const nextCursor = getNextCursor(e.key, cursor, totalNetworks - 1)
          const element = document.getElementById(`item-${nextCursor}`)
          setCursor(nextCursor)
          element?.scrollIntoView({ block: 'nearest', inline: 'center' })
          break
        }
        case 'Enter': {
          e.currentTarget.blur()
          if (isUndefined(cursor)) return
          const element = document.getElementById(`item-${cursor}`)
          element?.click()
          onClose()
          break
        }
        default:
          break
      }
    },
    [cursor, onClose, totalNetworks]
  )

  return {
    keyword,
    setKeyword,
    handleOnKeyDown,
    cursor,
    setCursor,
    filteredMainnetChains,
    filteredTestnetChains,
    filteredLocalChains,
  }
}
