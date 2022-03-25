import { Container } from '@chakra-ui/react'
import PageContainer from 'components/common/page-container'
import IntroComponent from 'components/about-us/sub-pages/projects/intro'
import ProjectsContentComponent from 'components/about-us/sub-pages/projects/content'

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Container maxW={'5xl'}>
        <IntroComponent />
        <ProjectsContentComponent />
      </Container>
    </PageContainer>
  )
}
