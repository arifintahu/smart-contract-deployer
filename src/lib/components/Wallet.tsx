import { Flex } from '@chakra-ui/react'
import type { MouseEventHandler } from 'react'

import { useCurrentChain } from '@/lib/app-provider'
import { truncate } from '@/lib/utils'

import {
  Connected,
  Connecting,
  Disconnected,
  Others,
  WalletConnectComponent,
} from './wallet/index'
import { useSnapshot } from 'valtio'
import { Wallet } from '@/lib/store/wallet.store'

export const WalletSection = () => {
  const { connect, openView } = useCurrentChain()
  const { status, address } = useSnapshot(Wallet)

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    await connect()
  }

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault()
    openView()
  }

  return (
    <Flex px={0}>
      <WalletConnectComponent
        walletStatus={status}
        disconnect={
          <Disconnected
            buttonText="Connect"
            onClick={onClickConnect}
            iconColor="text.main"
          />
        }
        connecting={<Connecting />}
        connected={
          <Connected
            buttonText={truncate(address)}
            icon="wallet"
            onClick={onClickOpenView}
            variant="ghost-accent"
          />
        }
        rejected={<Others buttonText="Reconnect" onClick={onClickConnect} />}
        error={<Others buttonText="Change Wallet" onClick={onClickOpenView} />}
        notExist={
          <Others buttonText="Install Wallet" onClick={onClickOpenView} />
        }
      />
    </Flex>
  )
}
