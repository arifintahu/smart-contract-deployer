import { ChainInfo } from '@/lib/types'
import { polygonMainnet } from './polygon'
import { bscTestnet } from './bsc'
import { kiiTestnet } from './kiichain'

export const allChainsArray: ChainInfo[] = [
  polygonMainnet,
  bscTestnet,
  kiiTestnet,
]
