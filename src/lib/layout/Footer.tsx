import type { IconProps } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

import { CustomIcon } from '@/lib/components/icon'
import type { IconKeys } from '@/lib/components/icon'

interface SocialMenuType {
  url: string
  icon: IconKeys
  slug: string
}

const socialMenu: SocialMenuType[] = [
  {
    url: 'https://initia.xyz',
    icon: 'website',
    slug: 'website',
  },
  {
    url: 'https://github.com/initia-labs',
    icon: 'github',
    slug: 'github',
  },
  {
    url: 'https://twitter.com/initiaFDN',
    icon: 'twitter',
    slug: 'twitter',
  },
  {
    url: 'https://medium.com/@initiafdn',
    icon: 'medium',
    slug: 'medium',
  },
]

const socialSequence = {
  website: 0,
  github: 1,
  discord: 2,
  twitter: 3,
  telegram: 4,
  medium: 5,
  reddit: 6,
  linkedin: 7,
}

const SocialMenuRender = ({
  isThemed,
  iconSize,
}: {
  isThemed?: boolean
  iconSize: IconProps['boxSize']
}) => {
  return (
    <>
      {socialMenu.map((item) => (
        <Link
          key={`${isThemed ? 'themed' : 'social'}-${item.slug}`}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flex
            borderRadius="8px"
            transition="all 0.25s ease-in-out"
            _hover={{ backgroundColor: 'gray.800' }}
          >
            <CustomIcon name={item.icon} boxSize={iconSize} color="gray.600" />
          </Flex>
        </Link>
      ))}
    </>
  )
}

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justifyContent="center"
      px={12}
      py={4}
      mx={1}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex direction="row" gap={1} align="center" mb={{ base: 2, md: 0 }}>
        <SocialMenuRender iconSize={5} />
      </Flex>
    </Flex>
  )
}

export default Footer
