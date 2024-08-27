import { Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'

import { CardInfo } from './CardInfo'
import PageContainer from '@/lib/components/PageContainer'
import { useSnapshot } from 'valtio'
import { Chain } from '@/lib/store/chain.store'
import { Wallet } from '@/lib/store/wallet.store'
import { useBalance } from '@/lib/hooks'
import { useEffect } from 'react'
import { displayBalance } from '@/lib/utils'
import { ConnectWalletAlert } from '@/lib/components/ConnectWalletAlert'

const txInfo = {
  title: 'My Balance',
}

const Home = () => {
  const { active } = useSnapshot(Chain)
  const { address } = useSnapshot(Wallet)
  const { data: balance, refetch, isLoading } = useBalance(address)

  useEffect(() => {
    refetch()
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
                title={txInfo.title}
                value={displayBalance(balance ?? 0, active.nativeCurrency)}
                isLoading={isLoading}
              />
              <CardInfo
                title={txInfo.title}
                value={displayBalance(balance ?? 0, active.nativeCurrency)}
                isLoading={isLoading}
              />
              <CardInfo
                title={txInfo.title}
                value={displayBalance(balance ?? 0, active.nativeCurrency)}
                isLoading={isLoading}
              />
            </Flex>
          )}
        </Flex>
      </PageContainer>
    </>
  )
}

export default Home
