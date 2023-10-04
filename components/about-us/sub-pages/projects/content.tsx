import { Box } from '@chakra-ui/react'
import Section from 'components/_common/Section'
import { PROJECTS } from 'constants/data'

export default function ProjectsContentComponent() {
  return (
    <Box display={'flex'} flexDir='column' alignItems={'center'}>
      {PROJECTS.map((project, index) => (
        <Section
          title={project.name}
          text={project.description}
          img={project.image}
          alt={project.name}
          reverse={index % 2 === 1}
          key={`project-${index}`}
        />
      ))}
    </Box>
  )
}
