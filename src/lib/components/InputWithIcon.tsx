import type { InputProps } from '@chakra-ui/react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { CustomIcon } from './icon'

interface InputWithIconProps extends InputProps {
  amptrackSection?: string
}

const InputWithIcon = ({
  my,
  size = 'md',
  amptrackSection,
  ...inputProps
}: InputWithIconProps) => (
  <InputGroup my={my}>
    <InputLeftElement h="full" alignItems="center">
      <CustomIcon name="search" color="gray.600" />
    </InputLeftElement>
    <Input {...inputProps} size={size} paddingLeft="36px !important" />
  </InputGroup>
)

export default InputWithIcon
