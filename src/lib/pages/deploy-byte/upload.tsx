import { Flex, Heading, Text, Textarea } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import ActionPageContainer from '@/lib/components/ActionPageContainer'
import { ConnectWalletAlert } from '@/lib/components/ConnectWalletAlert'
import { CustomIcon } from '@/lib/components/icon'
import { FooterCta } from '@/lib/components/layouts'
import { Stepper } from '@/lib/components/stepper'
import { useEffect, useState } from 'react'
import { SelectFileBtn } from '@/lib/components/button/SelectFileButton'

export const Upload = ({
  onComplete,
}: {
  onComplete: (value: boolean) => void
}) => {
  const router = useRouter()
  const [contractAbi, setContractAbi] = useState('')
  const [byteCode, setByteCode] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  const onChangeContractAbi = (fileContents: string[]) => {
    if (fileContents.length) {
      setContractAbi(fileContents[0])
    }
  }

  const onChangeByteCode = (fileContents: string[]) => {
    if (fileContents.length) {
      setByteCode(fileContents[0])
    }
  }

  useEffect(() => {
    setIsDisabled(!contractAbi || !byteCode)
  }, [contractAbi, byteCode])

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
              Contract ABI
            </Heading>
          </Flex>
          <Textarea
            placeholder="Contract ABI JSON File"
            value={contractAbi}
            onChange={(e) => setContractAbi(e.target.value)}
            minHeight={200}
          />
          <Flex justifyContent="end">
            <SelectFileBtn
              onChange={onChangeContractAbi}
              allowedExtensions={['json']}
            />
          </Flex>

          <Flex align="center" justify="space-between" mt={12} mb={4}>
            <Heading variant="h6" as="h6" alignSelf="flex-start">
              Byte Code
            </Heading>
          </Flex>
          <Textarea
            placeholder="Contract Byte Code"
            value={byteCode}
            onChange={(e) => setByteCode(e.target.value)}
            minHeight={200}
          />
          <Flex justifyContent="end">
            <SelectFileBtn
              onChange={onChangeByteCode}
              allowedExtensions={['bin']}
            />
          </Flex>
        </form>
      </ActionPageContainer>
      <FooterCta
        cancelButton={{
          leftIcon: <CustomIcon name="chevron-left" />,
          onClick: router.back,
        }}
        actionButton={{
          isDisabled: isDisabled,
          onClick: () => onComplete(true),
        }}
        actionLabel="Upload"
      />
    </>
  )
}
