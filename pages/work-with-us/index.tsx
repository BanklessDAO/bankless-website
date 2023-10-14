import { Heading, Stack, Text, Box, VStack } from '@chakra-ui/react'
import IntroductionComponent from 'components/work-with-us/introduction'
import Section from 'components/about-us/section'
import { WORK_WITH_US } from 'constants/data'

const SectionTitle = ({
  title,
  description,
}: {
  title: string
  description: string
}): React.ReactElement => (
  <Stack
    as={Box}
    textAlign={'center'}
    spacing={{ base: 3, md: 5 }}
    py={{ sm: 10, md: 18 }}
    my={{ base: 10, sm: 10, md: 20 }}>
    <Heading
      fontWeight={600}
      fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
      lineHeight={'110%'}
      color={'white.100'}
      fontFamily='Clear Sans'>
      {title}
    </Heading>
    <Text
      color='grey'
      fontSize={{ base: 'xl', lg: '2xl' }}
      fontFamily='Clear Sans'>
      {description}
    </Text>
  </Stack>
)

const WORK_WITH_US_CATEGORIES = [
  {
    title: 'Consulting and Education',
    description: 'Learn from Web3 experts',
    categorySlug: 'consulting-and-education',
  },
  {
    title: 'Sponsorships and Marketing',
    description: 'Scale your presence in Web3',
    categorySlug: 'sponsorships-and-marketing',
  },
  {
    title: 'Creative Services',
    description: 'Tell your story and reach a new audience',
    categorySlug: 'creative-services',
  },
  {
    title: 'Software and DAO tooling',
    description: 'Level up your organization with cutting-edge tooling',
    categorySlug: 'software-and-dao-tooling',
  },
]

export default function WorkWithUsPage() {
  return (
    <>
      <IntroductionComponent />
      {WORK_WITH_US_CATEGORIES.map((category, index) => (
        <Box key={`category-${index}`}>
          <SectionTitle title={category.title} description={category.title} />
          <VStack mt={8} rowGap={8}>
            {WORK_WITH_US.filter(
              project => project.category === category.categorySlug
            ).map((project, index) => (
              <Section
                project={project}
                reverse={index % 2 === 1}
                key={`project-${category.categorySlug}-${index}`}
              />
            ))}
          </VStack>
        </Box>
      ))}
    </>
  )
}
