import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  Button,
  Flex,
} from '@chakra-ui/react'
import type { AlertProps } from '@chakra-ui/react'
import type { MouseEventHandler } from 'react'

import { CustomIcon } from './icon'
import { useSnapshot } from 'valtio'
import { bootstrapWallet, Wallet } from '@/lib/store/wallet.store'

interface ConnectWalletAlertProps extends AlertProps {
  title?: string
  subtitle?: string
}

export const ConnectWalletAlert = ({
  title,
  subtitle,
  ...alertProps
}: ConnectWalletAlertProps) => {
  const { address } = useSnapshot(Wallet)

  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault()
    await bootstrapWallet()
  }

  return !address ? (
    <Alert
      {...alertProps}
      variant="accent"
      alignItems="center"
      justifyContent="space-between"
      py={3}
    >
      <Flex gap={2}>
        <CustomIcon name="wallet-solid" boxSize={4} />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{subtitle}</AlertDescription>
        </Box>
      </Flex>
      <Button size="sm" variant="ghost-accent" gap={2} onClick={onClickConnect}>
        <CustomIcon name="connect" /> Connect Wallet
      </Button>
    </Alert>
  ) : null
}
