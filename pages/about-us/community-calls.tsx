import CommunityCallsCCFormatComponent from 'components/about-us/sub-pages/community-calls/cc-format'
import CommunityCallsEvolutionComponent from 'components/about-us/sub-pages/community-calls/evolution'
import CommunityCallsIntroComponent from 'components/about-us/sub-pages/community-calls/intro'
import CommunityCallsSubscribeComponent from 'components/about-us/sub-pages/community-calls/subscribe'
import CommunityCallsWeekUpdateComponent from 'components/about-us/sub-pages/community-calls/week-update'

export default function CommunityCallsPage() {
  return (
    <>
      <CommunityCallsIntroComponent />
      <CommunityCallsCCFormatComponent />
      <CommunityCallsWeekUpdateComponent />
      <CommunityCallsEvolutionComponent />
      <CommunityCallsSubscribeComponent />
    </>
  )
}
