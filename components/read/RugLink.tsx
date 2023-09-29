import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Text,
  Grid,
  GridItem,
  Box,
  Link,
  HStack,
} from '@chakra-ui/react'
import { ArticleIcon } from './ArticleLink'

type RugLinkProps = {
  href: string
  type: string
  desc: string
}

function setLinkTitle(type: string) {
  switch (type) {
    case 'medium':
      return 'Medium'
    case 'twitter':
      return 'Twitter'
    case 'mirror':
      return 'Mirror'
  }
}

export const RugLink = ({ href, type, desc }: RugLinkProps) => {
  return (
    <NextLink href={href} passHref={true}>
      <Link _hover={{ textDecoration: 'none' }}>
        <Grid
          gridTemplateColumns={'3rem 1fr 1fr'}
          justifyContent='flex-start'
          alignItems='flex-start'
          ml={{ base: 0, xl: '4rem' }}
          mt={{ base: '2rem', md: 0 }}>
          <GridItem colSpan={1} rowSpan={1}>
            <ArticleIcon type={type} noOutline={true} />
          </GridItem>
          <GridItem colSpan={2} rowSpan={1}>
            <HStack gap={2}>
              <Text fontWeight={700} fontSize='2xl' mr='2' textAlign='center'>
                {setLinkTitle(type)}
              </Text>
              <Box marginLeft={2}>
                <Image
                  src='/bankless-website/icons/arrow.png'
                  alt='arrow'
                  height={15}
                  width={15}
                />
              </Box>
            </HStack>
          </GridItem>
          <GridItem colStart={2} colSpan={2} rowSpan={1}>
            <Text
              fontSize='lg'
              color='grey'
              maxW={{ base: '80%', xl: '240px' }}>
              {desc}
            </Text>
          </GridItem>
        </Grid>
      </Link>
    </NextLink>
  )
}
