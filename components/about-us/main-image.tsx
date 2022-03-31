import React, {Component} from 'react'
import Image from 'next/image'

import { Text, Box, Flex } from '@chakra-ui/react'

class MainImage extends Component {
  render() {
    return (
      <Flex
        width={'100%'}
        flexDir='row'
        justifyContent='center'
        alignItems='center'
      >
        <Box>
          <Box
            flexDir='column'
            display={'block'}
            alignItems='left'
            position={'relative'}
            top={0}
            left={0}
            height={'800px'}
          >
            <Box
              position={'absolute'}
              top={{base:'5%', md:'8%'}}
              left={{base:'-20%', md:'-5%'}}
              width={{base:'100%'}}
              height={{base:'100%'}}
              zIndex={'5'}
            >
              <Image
                src='/images/main-instructor.svg'
                alt='Main Image for About Us'
                width={800}
                height={580}
                objectFit='scale-down'
              />
            </Box>

            <Box
              position={'relative'}
              top={{base:'5%', md:'-10%'}}
              left={{base:'0%', md:'3%'}}
              width={{base:'80%', md:'100%'}}
              height={{base:'80%', md:'100%'}}
              zIndex={'1'}
            >
              <Image
                src='/images/red-ellipse-gradient.svg'
                alt='Red Gradient Background'
                width={1150}
                height={900}
                objectFit='contain'
                objectPosition={'relative'}
              />
            </Box>

            <Box
              position={'absolute'}
              top={{base:'40%', md:'65%'}}
              left={{base:'55%', md:'35%'}}
            >
              <Image
                alt='bitcoin'
                src='/images/tiny-circle-bitcoin.svg'
                objectFit='none'
                width={50}
                height={50}
              />
            </Box>

            <Box
              position={'absolute'}
              top={{base:'10%', md:'30%'}}
              left={{base:'53%', md:'46%'}}
            >
              <Image
                alt='bankless'
                src='/images/tiny-circle-bankless.svg'
                objectFit='none'
                width={50}
                height={50}
              />
            </Box>

            <Box position={'absolute'} top={{base:'9%', md:'38%'}} left={{base:'2%', md:'7%'}}>
              <Image
                alt='tezos'
                src='/images/tiny-circle-tezos.svg'
                objectFit='none'
                width={50}
                height={50}
              />
            </Box>

            <Box
              position={'absolute'}
              top={{base:'33%', md:'53%'}}
              left={{base:'2%', md:'50%'}}
            >
              <Image
                alt='aragon'
                src='/images/tiny-circle-aragon.svg'
                objectFit='none'
                width={50}
                height={50}
              />
            </Box>

            <Box
              position={'absolute'}
              top={{base:'26%', md:'20%'}}
              left={{base:'48%', md:'58%'}}
            >
              <Image
                alt='ethereum'
                src='/images/tiny-circle-ethereum.svg'
                objectFit='none'
                width={50}
                height={50}
              />
            </Box>
          </Box>
          <Box
            position={'absolute'}
            display={'inline-block'}
            top={{base:'10%', md:'6%'}}
            right={{base:'8%'}}
            height={'800px'}
          >
            <Text
              fontStyle={'normal'}
              fontWeight={700}
              fontSize={{base:'50px', sm:'50px', md:'90px'}}
              lineHeight={{base:'80px', sm:'80px', md:'135px'}}
            >
              {'Want Alpha?'.toUpperCase()}
            </Text>
            <Text
              fontStyle={'normal'}
              fontWeight={400}
              fontSize={{base:'30px', sm:'30px', md:'76px'}}
              lineHeight={{base:'80px', sm:'80px', md:'130px'}}
            >
              Join BanklessDAO
            </Text>
            <Text textDecoration={'underline'}>
              RAS{' '}
              <Image
                alt='diagonal arrow'
                src='/images/diagonal-arrow-up-right.png'
                objectFit='none'
                width={15}
                height={15}
              />
            </Text>
          </Box>
        </Box>
      </Flex>
    )
  }
}

export default MainImage
