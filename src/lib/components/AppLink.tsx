import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export const AppLink = ({
  children,
  ...linkProps
}: React.ComponentProps<typeof Link>) => {
  const componentHref = linkProps.href.toString()

  return (
    <Link {...linkProps} href={`${componentHref}`}>
      {typeof children === 'string' ? (
        <Text
          variant={{ base: 'body3', md: 'body2' }}
          w={{ base: 'max-content', md: 'auto' }}
          color={linkProps.color}
          h="auto"
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Link>
  )
}
