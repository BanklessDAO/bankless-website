import { Text, Stack, Flex } from '@chakra-ui/react'
import { ConsultImage } from '../ConsultImage'
import { CTA } from '../CTA'

export default function ServiceTabContentComponent() {
  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      pt={{ base: 10, md: 14 }}
      direction={{ base: 'column', md: 'row' }}>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <ConsultImage
          alt={'Photo by Matthew Kwong on Unsplash'}
          src={'/images/work-with-us/work-with-us-4.jpg'}
        />
      </Flex>

      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Text
          color={'gray.100'}
          fontSize={{ sm: 'sm', md: 'xl' }}
          textAlign='left'>
          Our AV Guild provides top-notch audio and visual services for
          Web3-native organizations. From audio production to voice-over talent
          to custom photography, bDAO’s AV experts offer a service to level-up
          your organization’s audio and visual assets. Commission an AV expert
          by filling out this form.
        </Text>
        <CTA url='https://www.notion.so/bankless/AudioVisual-Guild-64f9d5b6e62a45dc93391e4d075b40a9' text='Bankless AV Guild'/>
      </Stack>
    </Stack>
  )
}
