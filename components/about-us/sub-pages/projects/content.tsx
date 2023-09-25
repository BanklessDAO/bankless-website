import { Box } from '@chakra-ui/react'
import Section from 'components/_common/Section'
import { PROJECTS } from 'constants/data'

export default function ProjectsContentComponent() {
  return (
    <Box display={'flex'} flexDir='column' alignItems={'center'}>
      {PROJECTS.map((guild, index) => (
        <Section
          title={guild.name}
          text={guild.description}
          img={guild.image}
          alt={guild.name}
          reverse={index % 2 === 1}
          key={`guild-${index}`}
        />
      ))}
    </Box>
  )
}
