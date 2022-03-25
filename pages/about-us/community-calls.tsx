import { Container } from '@chakra-ui/react'
import CommunityCallsCCFormatComponent from 'components/about-us/sub-pages/community-calls/cc-format'
import CommunityCallsEvolutionComponent from 'components/about-us/sub-pages/community-calls/evolution'
import CommunityCallsIntroComponent from 'components/about-us/sub-pages/community-calls/intro'
import CommunityCallsSubscribeComponent from 'components/about-us/sub-pages/community-calls/subscribe'
import CommunityCallsWeekUpdateComponent from 'components/about-us/sub-pages/community-calls/week-update'
import PageContainer from 'components/common/page-container'

export default function CommunityCallsPage() {
  return (
    <PageContainer>
      <Container maxW={'6xl'}>
        <CommunityCallsIntroComponent />
        <CommunityCallsCCFormatComponent />
        <CommunityCallsWeekUpdateComponent />
        <CommunityCallsEvolutionComponent />
        <CommunityCallsSubscribeComponent />
      </Container>
    </PageContainer>
  )
}
