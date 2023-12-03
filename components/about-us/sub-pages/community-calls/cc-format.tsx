import {
  Box,
  Heading,
  Stack,
  Flex,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'

export default function CommunityCallsCCFormatComponent() {
  return (
    <>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        mt={{ base: 5, md: 10 }}
        p={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
        borderRadius='10px'
        background='#222020'
        bgGradient='linear(to-r, rgba(34, 0, 1, 1) 41.39%, rgba(0, 5, 114, 1) 190%)'
      >
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'100%'}
            overflow={'hidden'}
            margin={0}
            padding={0}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/community-calls/Dev-Guild-banner.png'}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', xl: '5xl' }}
          >
            The CC Format
          </Heading>
          <Box marginLeft={'1.25rem'}>
            <UnorderedList color={'gray.100'}>
              <ListItem>
                0-10 minutes: Moderator opens with key governance updates.
              </ListItem>
              <ListItem>
                10-30 minutes: Hype News from the community. What’s the most
                exciting thing happening in the DAO, and how can we celebrate
                it?
              </ListItem>
              <ListItem>
                30-55 minutes: Roundtable discussion on key topics in the DAO,
                especially governance.
              </ListItem>
              <ListItem>55-60 minutes: Moderator closes.</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
