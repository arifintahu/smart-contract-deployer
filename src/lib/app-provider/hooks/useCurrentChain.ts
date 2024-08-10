import { bootstrapWallet } from '@/lib/store/wallet.store'

interface ChainContext {
  connect: () => Promise<void>
  openView: () => void
}

export const useCurrentChain = (): ChainContext => {
  return {
    connect: bootstrapWallet,
    openView: () => {},
  }
}
