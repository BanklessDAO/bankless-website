import { Box, Heading, Text, Stack, Flex, Image } from '@chakra-ui/react'
import Underline from 'components/common/underline'

export default function CommunityCallsIntroComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 4, md: 7 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Community Calls
          <Underline />
        </Heading>

        <Text
          color={'grey'}
          fontSize={{ sm: 'sm', md: 'md' }}
          textTransform={'uppercase'}
        >
          Join the entire Bankless community on Fridays at 4pm UTC
        </Text>

        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          Community Calls are the anchor of the BanklessDAO community. Every
          Friday at 4pm UTC we gather for one hour on the Community Call Voice
          Stage to hear key governance updates, share hype news, and have
          roundtable discussions on important topics in the DAO. For those
          unable to join our Discord, catch the live stream on
          <Text
            display={'inline-block'}
            color={'red'}
            fontSize={{ sm: 'sm', md: 'md' }}
          >
            {' '}
            &nbsp; BanklessDAO Twitch.{' '}
          </Text>
        </Text>
      </Stack>

      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
        justifyContent={'center'}
      >
        <Flex justify={'center'} align={'center'} position={'relative'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://s3-alpha-sig.figma.com/img/570b/505c/0dd9573cd6dfe2037d239f2de0a5bed4?Expires=1649030400&Signature=Jw-~EDU~bGiHZSpr7yfnSDaeote8wjBucIUKbR94x9STjVAsjnZtaIoAmCwAy5GY89-EjcFOovOCECyKUxaTS4FNSpi0OYA2koZwfEcYQZAKrS4LEIHu5WfXUvvI1Q-UzoPIX~XndUSYTqDxq6f9tx1rA17fB1TrzuubfhZ66cXclQEx1BxXjpB2zKRBAmMq2dCZ98jZrM0HwIwMwmAyWukTa7iNx-TY1kPsqU~Cx3quw6A8eJPunnTcpE9EqZoDCCPwb9eBQH59QptMlcyer-SqpOs8YuSY5LovUUE8mco-gRwQ6cF-6ffq0j6R8SAheBmRSLS9RBROC~kt5w8g0w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
            />
          </Box>
        </Flex>

        <Stack
          spacing={{ base: 5, md: 10 }}
          width={{ base: '100%', md: 'inherit' }}
        >
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            textAlign='center'
            textTransform={'uppercase'}
            fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}
          >
            Want Alpha?
          </Heading>
          <Text
            color={'gray.100'}
            textAlign='center'
            fontSize={{ sm: 'sm', md: 'md' }}
          >
            Join the weekly CCs!
          </Text>
        </Stack>
      </Stack>
    </>
  )
}
