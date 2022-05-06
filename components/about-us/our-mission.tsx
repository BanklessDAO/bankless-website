import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'
import Underline from 'components/common/underline'

export default function OurMissionIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 10, md: 18 }}
        mt='20'
      >
        <Heading
          fontWeight={{ base: 600, md: 800 }}
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textTransform={'uppercase'}
        >
          Our mission is to onboard 1 billion people to crypto
          <Underline />
        </Heading>

        <Text color={'grey'} fontSize={{ base: 'xl', md: '2xl' }}>
          The nodes in our growing ecosystem collaborate to create user-friendly
          onramps for people to discover, use, learn, and enjoy the benefits of
          Web3. Everyone falls down the rabbithole a different way—we provide
          all the ways.
        </Text>
      </Stack>

      <Stack
        as={Box}
        textAlign={'center'}
        justify={'center'}
        align={'center'}
        py={{ base: 0, sm: 30, md: 50 }}
      >
        <Box
          width={{ base: 0, sm: '300px', md: '500px' }}
          height={{ base: 0, sm: '300px', md: '500px' }}
          borderRadius='50%'
          border='rgba(255, 255, 255, 0.05) 1px solid'
          boxShadow={
            'inset 0 0 30px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.1)'
          }
        >
          <Box
            width={{ base: 0, sm: '150px', md: '250px' }}
            height={{ base: 0, sm: '150px', md: '250px' }}
            borderRadius='50%'
            border='rgba(255, 0, 0, 0.2) 5px solid'
            margin={{ base: '75px', md: '125px' }}
          >
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '80px', md: '120px' }}
              height={{ base: 0, sm: '80px', md: '120px' }}
              margin={{ base: '30px', md: '60px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-center.png'}
            />
            <Image
              alt='orbit outer'
              position={'absolute'}
              width={{ base: 0, sm: '30px', md: '50px' }}
              height={{ base: 0, sm: '30px', md: '50px' }}
              margin={{ base: '70px -50px', md: '110px -80px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-outer-3.png'}
            />
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '30px', md: '50px' }}
              height={{ base: 0, sm: '30px', md: '50px' }}
              margin={{ base: '-40px 125px', md: '-70px 200px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-outer-1.png'}
            />
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '30px', md: '50px' }}
              height={{ base: 0, sm: '30px', md: '50px' }}
              margin={{ base: '160px 100px', md: '260px 170px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-outer-2.png'}
            />
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '26px', md: '44px' }}
              height={{ base: 0, sm: '26px', md: '44px' }}
              margin={{ base: '8px 8px', md: '15px 15px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-mid-1.png'}
            />
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '26px', md: '44px' }}
              height={{ base: 0, sm: '26px', md: '44px' }}
              margin={{ base: '60px 130px', md: '100px 220px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-mid-2.png'}
            />
            <Image
              alt='orbit'
              position={'absolute'}
              width={{ base: 0, sm: '26px', md: '44px' }}
              height={{ base: 0, sm: '26px', md: '44px' }}
              margin={{ base: '118px 27px', md: '203px 50px' }}
              borderRadius='50%'
              src={'/images/about-image-orbit-mid-3.png'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '22px', md: '36px' }}
              height={{ base: 0, sm: '22px', md: '36px' }}
              margin={{ base: '-36px -6px', md: '-60px -10px' }}
              borderRadius='50%'
              backgroundColor={'#FF1013'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '22px', md: '36px' }}
              height={{ base: 0, sm: '22px', md: '36px' }}
              margin={{ base: '36px 180px', md: '60px 300px' }}
              borderRadius='50%'
              backgroundColor={'#FF1013'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '22px', md: '36px' }}
              height={{ base: 0, sm: '22px', md: '36px' }}
              margin={{ base: '-14px 70px', md: '-20px 125px' }}
              borderRadius='50%'
              backgroundColor={'#606060'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '22px', md: '36px' }}
              height={{ base: 0, sm: '22px', md: '36px' }}
              margin={{ base: '150px -12px', md: '240px -20px' }}
              borderRadius='50%'
              backgroundColor={'#606060'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '12px', md: '22px' }}
              height={{ base: 0, sm: '12px', md: '22px' }}
              margin={{ base: '116px -8px', md: '180px -16px' }}
              borderRadius='50%'
              backgroundColor={'#FF1013'}
            />
            <Box
              position={'absolute'}
              width={{ base: 0, sm: '12px', md: '22px' }}
              height={{ base: 0, sm: '12px', md: '22px' }}
              margin={{ base: '120px 145px', md: '210px 242px' }}
              borderRadius='50%'
              backgroundColor={'#FF1013'}
            />
          </Box>
        </Box>
      </Stack>
    </>
  )
}
