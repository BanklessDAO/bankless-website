import {
  Box,
  Heading,
  Stack,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Text,
} from '@chakra-ui/react'

export default function CommunityCallsWeekUpdateComponent() {
  return (
    <>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
        borderRadius='10px'
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
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/bankless-website/public/images/Group-15310.png'}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 4 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', xl: '5xl'}}
          >
            Weekly Updates
          </Heading>
          <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
            There’s so much going on in the DAO that we have two newsletters
            designed to share critical updates without crowding the discussions
            happening in the call. Get up to speed by reading:
          </Text>
          <Box marginLeft={'1.25rem'}>
            <UnorderedList color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
              <ListItem>
                The Weekly Rollup Newsletter released Fridays.
              </ListItem>
              <ListItem>The Gearing Up Newsletter released Tuesdays.</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
