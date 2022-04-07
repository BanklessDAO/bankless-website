import PageContainer from 'components/common/page-container'
import { Container } from '@chakra-ui/react'
import IntroductionAboutUsComponent from 'components/about-us/introduction'
import OurMissionAboutUsComponent from 'components/about-us/our-mission'
import OurVisionAboutUsComponent from 'components/about-us/our-vision'
import JoinUsAboutUsComponent from 'components/about-us/join-us'
import NewsLetterAboutUsComponent from 'components/common/newsletter-section'

export default function AboutUsPage() {
  return (
    <PageContainer>
      <Container maxW={{ base: 'container.md', md: 'container.xl' }}>
        <IntroductionAboutUsComponent />
        <OurMissionAboutUsComponent />
        <OurVisionAboutUsComponent />
        <JoinUsAboutUsComponent />
        <NewsLetterAboutUsComponent />
      </Container>
    </PageContainer>
  )
}
