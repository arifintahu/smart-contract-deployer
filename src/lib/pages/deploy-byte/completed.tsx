import { Heading, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

import ActionPageContainer from '@/lib/components/ActionPageContainer'
import { CustomIcon } from '@/lib/components/icon'
import { Stepper } from '@/lib/components/stepper'

export const DeployComplete = observer(({ address }: { address: string }) => {
  return (
    <ActionPageContainer>
      <Heading variant="h6" as="h6" color="text.dark" mb={3}>
        Deploy new contract
      </Heading>
      <Stepper mode="deploy" currentStep={1.5} />
      <CustomIcon
        name="check-circle-solid"
        color="success.main"
        boxSize={8}
        mt={10}
      />
      <Heading as="h4" variant="h4" mt={4} mb={12}>
        Deploy Complete!
      </Heading>
      <Text variant="body2" color="text.dark" fontWeight={500} mb={4}>
        Contract has been deployed.
      </Text>
      <Text variant="body2" color="text.dark" fontWeight={500} mb={4}>
        {address}
      </Text>
    </ActionPageContainer>
  )
})
