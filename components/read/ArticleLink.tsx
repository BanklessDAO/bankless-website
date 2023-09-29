import React, { useState } from 'react'
import {
  HStack,
  Text,
  Flex,
  Image,
  WrapItem,
  Box,
} from '@chakra-ui/react'
import NextLink from 'next/link'

type ArticleLinkProps = {
  type: string
  url: string
  desc: string
}

type ArticleIconProps = {
  type: string
  noOutline?: boolean
}

export const ArticleIcon = ({ type, noOutline }: ArticleIconProps) => (
  <>
    {type === 'medium' && (
      <>
        {noOutline ? (
          <>{`No outline`}</>
        ) : (
          <Flex
            justify='center'
            alignItems='center'
            background='#222222'
            borderRadius='8px'
            padding='10px'
          >
            <Image
              src='/bankless-website/icons/medium.png'
              alt='medium'
              height={30}
              width={45}
            />
          </Flex>
        )}
      </>
    )}
    {type === 'mirror' && (
      <>
        {noOutline ? (
          <Image src='/bankless-website/icons/mirror.png' alt='mirror' height={30} width={30} />
        ) : (
          <Flex
            justify='center'
            alignItems='center'
            background='#222222'
            borderRadius='8px'
            padding='10px'
          >
            <Image
              src='/bankless-website/icons/mirror.png'
              alt='mirror'
              height={30}
              width={25}
            />
          </Flex>
        )}
      </>
    )}
    {type === 'publish' && (
      <>
        {noOutline ? (
          <Image
            src='/bankless-website/icons/publish.png'
            alt='bankless publishing'
            height={30}
            width={30}
          />
        ) : (
          <Flex
            justify='center'
            alignItems='center'
            background='#222222'
            borderRadius='8px'
            padding='10px'
          >
            <Image
              src='/bankless-website/icons/publish.png'
              alt='bankless publishing'
              height={30}
              width={25}
            />
          </Flex>
        )}
      </>
    )}
    {type === 'twitter' && (
      <>
        {
          <Image
            src='/bankless-website/icons/twitter.png'
            alt='twitter'
            height={30}
            width={35}
          />
        }
      </>
    )}
    {!type && <></>}
  </>
)

function setArticleType(type: string): string | undefined {
  switch (type) {
    case 'medium':
      return 'Medium'
    case 'mirror':
      return 'Mirror'
    case 'publish':
      return 'Bankless Publishing'
    default:
      break
  }
}

export const ArticleLink = ({ type, url, desc }: ArticleLinkProps) => {
  const [showFullDesc, setShowFullDesc] = useState(false)

  const toggleShowFullDesc = () => {
    setShowFullDesc(!showFullDesc)
  }

  return (
    <Box display={'flex'} flexDirection={'column'} w='100%' height='100%'>
      <NextLink href={url} passHref={true}>
        <WrapItem
          as='a'
          display='flex'
          flexDirection='column'
          alignItems='start'
          target='_blank'
          w='100%'
          p={0}
          height='100%'
          bg='transparent'
          zIndex={1}
          _hover={{ cursor: 'pointer' }}
        >
          <Flex
            justify='center'
            alignItems='center'
            background='#222222'
            borderRadius='8px'
            padding='10px'
          >
            <ArticleIcon type={type} />
          </Flex>
          <HStack justifyContent='center' alignItems='baseline' pt='1rem'>
            <Text fontSize={'4xl'} fontWeight={700} fontFamily='Clear Sans'>
              {setArticleType(type)}
            </Text>
            <Image src='/bankless-website/icons/arrow.png' alt='arrow' height={15} width={15} />
          </HStack>
          <Text
            w={{ base: '100%', md: '90%', xl: '100%' }}
            fontSize='xl'
            textOverflow='wrap'
            fontFamily='Clear Sans'
            color='grey'
            lineHeight='1.2'
          >
            {desc.length > 75 ? (
              showFullDesc ? (
                <>{desc} </>
              ) : (
                <>{`${desc.substring(0, 75)}... `}</>
              )
            ) : (
              desc
            )}
          </Text>
        </WrapItem>
      </NextLink>
      {desc.length > 75 ? (
        showFullDesc ? (
          <Text
            as='span'
            color='blue.500'
            textDecoration='underline'
            onClick={toggleShowFullDesc}
            cursor='pointer'
          >
            Read less
          </Text>
        ) : (
          <Text
            as='span'
            color='blue.500'
            textDecoration='underline'
            onClick={toggleShowFullDesc}
            cursor='pointer'
          >
            Read more
          </Text>
        )
      ) : (
        <></>
      )}
    </Box>
  )
}
