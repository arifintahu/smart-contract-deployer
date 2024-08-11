import { proxy } from 'valtio'

import { switchNetwork } from './wallet.store'
import { getItem, isJson, setItem } from '@/lib/utils'
import { allChainsArray } from '@/lib/data/chains'
import { ChainInfo } from '@/lib/types'

export const LOCALSTORAGE_CHAIN_KEY = 'active-chain'

const defaultChain = allChainsArray[0]
const savedChain = getItem(LOCALSTORAGE_CHAIN_KEY, JSON.stringify(defaultChain))

type ChainStore = {
  active: ChainInfo
  all: ChainInfo[]
}

export const Chain = proxy<ChainStore>({
  active:
    savedChain && isJson(savedChain) ? JSON.parse(savedChain) : defaultChain,
  all: allChainsArray,
})

export function setActiveChain(chainId: string) {
  const newChain = Chain.all.find((chain) => chain.chainId === chainId)
  if (newChain) {
    Chain.active = newChain
    setItem(LOCALSTORAGE_CHAIN_KEY, JSON.stringify(newChain))
    switchNetwork()
  }
}
