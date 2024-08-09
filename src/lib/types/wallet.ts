import type { MouseEventHandler, ReactNode } from 'react'

import type { IconKeys } from '@/lib/components/icon'

export interface ChooseChainInfo {
  chainName: string
  chainRoute?: string
  label: string
  value: string
  icon?: string
  disabled?: boolean
}

export enum WalletStatus {
  Disconnected = 'Disconnected',
  Connecting = 'Connecting',
  Connected = 'Connected',
  NotExist = 'NotExist',
  Rejected = 'Rejected',
  Error = 'Error',
}

export interface ConnectWalletType {
  buttonText?: string
  isLoading?: boolean
  isDisabled?: boolean
  icon?: IconKeys
  iconColor?: string
  variant?: string
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>
}

export interface ConnectedUserCardType {
  walletIcon?: string
  username?: string
  icon?: ReactNode
}

export interface FeatureProps {
  title: string
  text: string
  href: string
}

export interface ChainCardProps {
  prettyName: string
  icon?: string
}
