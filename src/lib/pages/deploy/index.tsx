import ActionPageContainer from '@/lib/components/ActionPageContainer'
import Head from 'next/head'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { Stepper } from '@/lib/components/stepper'
import { ConnectWalletAlert } from '@/lib/components/ConnectWalletAlert'
import { ButtonCard } from '@/lib/components/ButtonCard'
import { useSnapshot } from 'valtio'
import { Wallet } from '@/lib/store/wallet.store'
import PageContainer from '@/lib/components/PageContainer'
import { useInternalNavigate } from '@/lib/app-provider'

const Deploy = () => {
  const navigate = useInternalNavigate()
  const { address } = useSnapshot(Wallet)
  return (
    <>
      <Head>
        <title>Deployer - Deploy Contract</title>
        <meta name="description" content="Deployer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <ActionPageContainer>
          <Text variant="body1" color="text.dark" mb={3} fontWeight={700}>
            DEPLOY NEW CONTRACT
          </Text>
          <Stepper mode="deploy" currentStep={1} />
          <Flex direction="column" alignItems="center" my={12}>
            <Heading as="h5" variant="h5">
              Select Deploy Option
            </Heading>
          </Flex>
          <ConnectWalletAlert
            subtitle="You need to connect wallet to proceed this action"
            mb={4}
          />
          <ButtonCard
            title="Use byte code"
            description={'Upload a contract byte code on-chain'}
            disabled={!address}
            onClick={() => navigate({ pathname: '/deploy-byte' })}
            mb={4}
          />
          <ButtonCard
            title="Use solidity code"
            description="Use a solidity contract code"
            disabled={!address}
            onClick={() => {}}
          />
        </ActionPageContainer>
      </PageContainer>
    </>
  )
}

export default Deploy
