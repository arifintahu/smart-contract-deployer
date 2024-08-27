import { Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'

import { CardInfo } from './CardInfo'
import PageContainer from '@/lib/components/PageContainer'
import { useSnapshot } from 'valtio'
import { Chain } from '@/lib/store/chain.store'
import { Wallet } from '@/lib/store/wallet.store'
import { useBalance, useBlockNumber, useGasPrice } from '@/lib/hooks'
import { useEffect } from 'react'
import { displayBalance, displayWeiToGwei } from '@/lib/utils'
import { ConnectWalletAlert } from '@/lib/components/ConnectWalletAlert'

const Home = () => {
  const { active } = useSnapshot(Chain)
  const { address } = useSnapshot(Wallet)
  const {
    data: balance,
    refetch: refetchBalance,
    isLoading: isLoadingBalance,
  } = useBalance(Wallet.web3, address)
  const {
    data: blockNumber,
    refetch: refetchBlockNumber,
    isLoading: isLoadingBlockNumber,
  } = useBlockNumber(Wallet.web3)
  const {
    data: gasPrice,
    refetch: refetchGasPrice,
    isLoading: isLoadingGasPrice,
  } = useGasPrice(Wallet.web3)

  useEffect(() => {
    refetchBalance()
    refetchBlockNumber()
    refetchGasPrice()
  }, [active])

  return (
    <>
      <Head>
        <title>Deployer - Overview</title>
        <meta name="description" content="Deployer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Flex
          direction="column"
          mb={12}
          position="relative"
          overflow="hidden"
          sx={{ '& > div': { zIndex: 1 } }}
        >
          <Flex
            justifyContent="space-between"
            alignItems="center"
            mb={5}
            zIndex={1}
          >
            <Heading as="h4" variant={{ base: 'h5', md: 'h4' }}>
              Overview
            </Heading>
          </Flex>
          <ConnectWalletAlert subtitle="You need to connect wallet" mb={4} />

          {!!address && (
            <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
              <CardInfo
                title={'My Balance'}
                value={displayBalance(balance ?? 0, active.nativeCurrency)}
                isLoading={isLoadingBalance}
              />
              <CardInfo
                title={'Last Block'}
                value={blockNumber?.toString()}
                isLoading={isLoadingBlockNumber}
              />
              <CardInfo
                title={'Recent Gas Price'}
                value={displayWeiToGwei(gasPrice ?? 0)}
                isLoading={isLoadingGasPrice}
              />
            </Flex>
          )}
        </Flex>
      </PageContainer>
    </>
  )
}

export default Home
