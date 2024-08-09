import { WalletStatus } from '../../types'

interface ChainContext {
  address: string
  connect: () => Promise<void>
  openView: () => void
  status: WalletStatus
}

export const useCurrentChain = (): ChainContext => {
  // const {
  //   chainConfig: { registryChainName },
  // } = useCelatoneApp();

  // const { address, ...res } = useChain(registryChainName);
  return {
    address: '0x1234567890',
    connect: async () => {},
    openView: () => {},
    status: WalletStatus.Disconnected,
  }
}
