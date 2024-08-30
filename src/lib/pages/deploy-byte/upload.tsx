import { Button, Flex, Heading, Text, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import ActionPageContainer from '@/lib/components/ActionPageContainer'
import { ConnectWalletAlert } from '@/lib/components/ConnectWalletAlert'
import { CustomIcon } from '@/lib/components/icon'
import { FooterCta } from '@/lib/components/layouts'
import { Stepper } from '@/lib/components/stepper'

export const Upload = () => {
  const router = useRouter()

  return (
    <>
      <ActionPageContainer>
        <Text variant="body1" color="text.dark" mb={3} fontWeight={700}>
          DEPLOY NEW CONTRACT
        </Text>
        <Stepper mode="deploy" currentStep={1} />
        <Flex direction="column" alignItems="center" my={12}>
          <Heading as="h5" variant="h5">
            Upload Byte Code
          </Heading>
        </Flex>
        <ConnectWalletAlert
          subtitle="You need to connect your wallet first"
          mb={12}
        />
        <form style={{ width: '100%' }}>
          <Flex align="center" justify="space-between" mt={12} mb={4}>
            <Heading variant="h6" as="h6" alignSelf="flex-start">
              ABI Json
            </Heading>
          </Flex>
          <Textarea placeholder="Here is a sample placeholder" />
          <Flex justifyContent="end">
            <Button variant="outline-gray" w="128px">
              Select File
            </Button>
          </Flex>

          <Flex align="center" justify="space-between" mt={12} mb={4}>
            <Heading variant="h6" as="h6" alignSelf="flex-start">
              Byte Code
            </Heading>
          </Flex>
          <Textarea placeholder="Here is a sample placeholder" />
          <Flex justifyContent="end">
            <Button variant="outline-gray" w="128px">
              Select File
            </Button>
          </Flex>
        </form>
      </ActionPageContainer>
      <FooterCta
        cancelButton={{
          leftIcon: <CustomIcon name="chevron-left" />,
          onClick: router.back,
        }}
        actionButton={{
          isDisabled: true,
          onClick: () => {},
        }}
        actionLabel="Upload"
      />
    </>
  )
}
