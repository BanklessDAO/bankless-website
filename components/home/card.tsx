import React from 'react'
import { Text, Box, Flex } from '@chakra-ui/react'
import { ChakraNextImage } from 'components/_common/ChakraNextImage'
import { useRouter } from 'next/router'

interface Props {
  img: string
  title: string
  text: string
  href: string
  pending?: boolean
}

const Card = ({ img, title, text, href, pending }: Props) => {
  const router = useRouter()
  const handleClick = () => router.push(href, undefined, { shallow: true })
  return (
    <Flex
      onClick={!pending ? handleClick : undefined}
      flexDirection='column'
      borderRadius='1rem'
      cursor={!pending ? 'pointer' : undefined}
      background='#101010'
      maxHeight={{
        base: '32rem',
        sm: '32rem',
        md: '32rem',
        lg: '40rem',
        xl: '32rem',
      }}
      overflow='hidden'
      // maxW={{ base: '300px', md: '400px' }}
    >
      <Box w='100%' h='50rem' position='relative'>
        <ChakraNextImage
          position='relative'
          src={img}
          alt='image'
          width={{ base: 'auto', md: '100%' }}
          height='20rem'
        />
        {/* <Image src={this.props.img} alt='image' w='100%' h='100%' /> */}
      </Box>

      <Flex flexDir='column' height='100%' padding={{ base: 6, lg: 6 }}>
        <Text fontSize={{ base: '1.3rem', lg: '3xl' }} fontWeight={700}>
          {title.toUpperCase()}
        </Text>
        <Flex
          direction={'column'}
          justifyContent={'space-between'}
          height={'100%'}>
          <Text
            fontSize={{ base: 'md', lg: 'xl' }}
            color='rgba(255,255,255,0.57)'>
            {text}
          </Text>
          {pending && (
            <Box display='flex' alignItems='center' marginRight='2'>
              <Text fontSize='sm' marginRight={2}>
                Coming Soon
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Card
