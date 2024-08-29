import { Flex, Heading, Text } from '@chakra-ui/react'
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
        {/* <UploadSection
          formData={formData}
          estimatedFee={estimatedFee}
          setEstimatedFee={setEstimatedFee}
          shouldNotSimulate={shouldNotSimulate}
          setDefaultBehavior={setDefaultBehavior}
          simulateStatus={simulateStatus}
          isSimulating={isSimulating}
        /> */}
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
