import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  Image,
  GridItem,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import Underline from 'components/_common/underline'

export default function GovernanceKickstartComponent() {
  return (
    <>
      <Stack
        as={Box}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 10, md: 18 }}
        mt={'2rem'}
        position='relative'
        zIndex='docked'
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '1.5rem', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
          textAlign={{ base: 'left', sm: 'center' }}
        >
          How to kickstart a project within the DAO
          <Box mt='2rem' width={{ base: '90%', sm: '100%' }}>
            <Underline />
          </Box>
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Flex align={'center'} mb={3}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                src={'/bankless-website/images/support.png'}
              />
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight={'700'}
                color={'white'}
                ml={3}
              >
                GAIN SUPPORT
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'} maxW={{ lg: '30rem' }}>
              Pitch your idea to fellow contributors so you can find a group
              that aligns with your goals and wants to see your idea come to
              life. Typically, this involves hours spent on multiple Discord
              meetings and lots of discussions in channels. You are encouraged
              to have these conversations in public channels so that other
              like-minded individuals can get involved.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                src={'/bankless-website/images/draft.png'}
              />
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight={'700'}
                color={'white'}
                ml={3}
              >
                DRAFT A PROPOSAL
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'} maxW={{ lg: '30rem' }}>
              Write a forum post following this template. The bDAO community
              will vote on your proposal and leave feedback on our forum. If
              your proposal is particularly complex or technical, share
              educational materials so voters can better understand it and make
              an informed decision.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                src={'/bankless-website/images/workshop.png'}
              />
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight={'700'}
                color={'white'}
                ml={3}
              >
                WORKSHOP THE PROPOSAL
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'} maxW={{ lg: '30rem' }}>
              The majority of proposals don’t pass muster in their original
              form. This is our iteration process in action. Keep an eye out for
              the comments and feedback from our contributors on your proposal:
              they are invaluable to making it a success. Incorporate the
              feedback you get and prepare a second or third draft if necessary.
            </Text>
          </Box>

          <Box>
            <Flex align={'center'} mb={3}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                src={'/bankless-website/images/vote.png'}
              />
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight={'700'}
                color={'white'}
                ml={3}
              >
                VOTE
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'} maxW={{ lg: '30rem' }}>
              If your proposal is up for at least seven days, receives at least
              30 votes, and has a majority in favor, you’re approved to begin
              work! If you don’t require funding from the Grants Committee you
              can begin work immediately.
            </Text>
          </Box>

          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Flex align={'center'} mb={3}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                src={'/bankless-website/images/funding.png'}
              />
              <Text
                fontFamily={'heading'}
                fontSize={'xl'}
                fontWeight={'700'}
                color={'white'}
                ml={3}
              >
                ACQUIRE FUNDING
              </Text>
            </Flex>

            <Text fontSize={'md'} color={'gray.400'} maxW='65rem'>
              If your proposal requires funding, you need to submit this form to
              go before the Grants Committee and request funding. Then, you can
              pitch your proposal to the Grants Committee in their weekly
              meeting on Tuesdays at 12pm EST/5pm UTC in the Amphitheater, a
              voice room in the BanklessDAO Discord.
            </Text>
            <Text fontSize={'md'} color={'white.100'} py={'1rem'}>
              In order to acquire funding, you need to meet these preliminary
              requirements:
            </Text>
            <UnorderedList fontSize={'md'} color={'gray.400'}>
              <ListItem>
                One or more project champions who serve as the main point of
                contact.
              </ListItem>
              <ListItem>A channel in the BanklessDAO Discord.</ListItem>
              <ListItem>project page on BanklessDAO’s Notion.</ListItem>
              <ListItem>
                A multisig with at least three signers that will receive the
                grant funding.
              </ListItem>
            </UnorderedList>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </>
  )
}
