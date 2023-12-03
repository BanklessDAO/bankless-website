import React from 'react'
import { Box, Flex, Text, Image, VStack, Link } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { ProjectType } from 'entities/project'

const Section = ({
  project,
  reverse,
}: {
  project: ProjectType
  reverse?: boolean
}): React.ReactElement => (
  <Flex
    flexDirection={{
      base: 'column',
      sm: 'column',
      xl: reverse ? 'row-reverse' : 'row',
    }}
    columnGap={16}
  >
    <Box width={{ base: '100%' }} zIndex='1'>
      <Image
        alt={project.name}
        fit={'cover'}
        align={'center'}
        w={'100%'}
        h={'100%'}
        maxH='600px'
        borderRadius={'22px'}
        src={project.image}
      />
    </Box>

    <Box
      height={'35rem'}
      width={'35rem'}
      pos='absolute'
      zIndex='0'
      left={{ base: '10%', lg: '15%' }}
      top={{ base: '6%', lg: '5%' }}
      opacity='0.035'
      borderRadius={'50%'}
      bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
      filter='blur(4rem)'
    />
    <Box
      height={'30rem'}
      width={'30rem'}
      pos='absolute'
      zIndex='0'
      right={{ base: '15%', lg: '20%' }}
      top={{ base: '20%', lg: '20%' }}
      opacity='0.035'
      borderRadius={'50%'}
      bgGradient='linear-gradient(121.75deg, rgba(255, 16, 19, 0.6) 58%, rgba(140,29,207,0.6) 0%)'
      filter='blur(4rem)'
    />

    <VStack
      width={{ base: '100%' }}
      rowGap={{ base: '8px', md: '57px' }}
      mt={{ base: '32px', md: '32px' }}
      textAlign='start'
      justifyContent='center'
      alignItems='start'
      zIndex='1'
    >
      <Text fontSize={{ base: '18px', md: '30px' }} fontWeight={700}>
        {project.name.toUpperCase()}
      </Text>
      <Text fontSize={{ base: '12px', md: '28px' }}>{project.description}</Text>
      {project.link && (
        <Link href={project.link} isExternal>
          <Flex
            align={'center'}
            color={'white.100'}
            fontSize='20px'
            lineHeight={'24px'}
            fontWeight='700'
          >
            Learn More <FiArrowUpRight />
          </Flex>
        </Link>
      )}
    </VStack>
  </Flex>
)

export default Section
