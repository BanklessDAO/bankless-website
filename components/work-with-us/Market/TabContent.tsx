import { Text, Stack, Flex } from '@chakra-ui/react'
import { ConsultImage } from '../ConsultImage'
import { CTA } from '../CTA'

export default function MarketTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text
          color={'gray.100'}
          fontSize={{ sm: 'sm', md: 'xl' }}
          textAlign='left'>
          Sponsor any of our newsletters and reach tens of thousands of readers
          every week. Choose from Weekly Rollup, State of the DAOs,
          Decentralized Art, Decentralized Law, and Gearing up, as well as a
          variety of languages, to reach your perfect audience. Inquire about
          sponsoring a newsletter by filling out this form.
        </Text>
        <CTA url='https://www.notion.so/bankless/Writers-Guild-585a90523b9f4630bc04892931a11f7d' text='Bankless Newsletters'/>
      </Stack>

      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          alt={'Photo by Jess Bailey on Unsplash'}
          src={'/images/work-with-us/work-with-us-5.jpg'}
        />
      </Flex>
    </Stack>
  )
}
