import { Button } from '@chakra-ui/react'
import type { MouseEventHandler } from 'react'

import { CustomIcon } from '../icon'
import { bootstrapWallet } from '@/lib/store/wallet.store'

export const ConnectWalletBtn = () => {
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    await bootstrapWallet()
  }

  return (
    <Button variant="outline-primary" gap={2} onClick={onClickConnect}>
      Connect Wallet
      <CustomIcon name="connect" />
    </Button>
  )
}
