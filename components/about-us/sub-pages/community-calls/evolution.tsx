import {
  Box,
  Heading,
  Stack,
  Flex,
  Image,
  UnorderedList,
  ListItem,
  Text,
  FormControl,
  Button,
  Link
} from '@chakra-ui/react'

export default function CommunityCallsEvolutionComponent() {
  return (
    <>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pt={{ base: 10, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
        borderRadius='10px'>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          flexDirection={'column'}
          display={{ base: 'flex', md: 'none' }}>
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/community-calls/bell-01.png'}
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            color={'gray.100'}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }}>
            Evolution
          </Heading>
          <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
            The CC format was designed by the community via forum discussions
            and continues to evolve. {''}
            <Link
              color={'white.100'}
              fontSize={{ sm: 'sm', md: 'md' }}
              display='inline-block'
              href='https://twitter.com/samanthajmarin'
              isExternal>
              Samanthaj
            </Link>{' '}
            and{' '}
            <Link
              color={'white.100'}
              fontSize={{ sm: 'sm', md: 'md' }}
              display='inline-block'
              href='https://twitter.com/frogmonkee'
              isExternal>
              frogmonkee
            </Link>{' '}
            led the effort in Season 3 and proposed several changes to revamp
            the CC format, which used to be a string of updates from
            coordinators. Read more about the evolution:
          </Text>
          <Box marginLeft={'1.25rem'}>
            <UnorderedList color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
              <ListItem>CC Revamp Draft 1</ListItem>
              <ListItem>CC Revamp Draft 2</ListItem>
              <ListItem>Gearing Up Newsletter Proposal</ListItem>
            </UnorderedList>
          </Box>
        </Stack>

        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          flexDirection={'column'}>
          <Box
            position={'relative'}
            height={'250px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}
            display={{ base: 'none', md: 'flex' }}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'/images/about-us/community-calls/bell-01.png'}
            />
          </Box>
          <Text color={'gray.100'} fontSize={{ sm: 'sm', md: 'md' }}>
            Add the Weekly CC to your calendar!
          </Text>
          <FormControl
            w={{ base: '40%', md: '40%' }}
            marginInlineStart='unset!important'
            mt={'1rem'}>
            <Link href={'http://www.google.com/calendar/event?action=TEMPLATE'}>
              <Button
                colorScheme='red'
                w='100%'
                type='submit'
                borderRadius={'none'}>
                Add to Calendar
              </Button>
            </Link>
          </FormControl>
        </Flex>
      </Stack>
    </>
  )
}
