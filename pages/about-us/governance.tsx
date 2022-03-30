import { Container } from '@chakra-ui/react'
import PageContainer from 'components/common/page-container'
import GovernanceIntroComponent from 'components/about-us/sub-pages/Governance/intro'
import GovernanceKickstartComponent from 'components/about-us/sub-pages/Governance/kickstart'
import GovernanceRequirementComponent from 'components/about-us/sub-pages/Governance/requirements'
import GovernanceSeasonComponent from 'components/about-us/sub-pages/Governance/season'
import GovernanceContributorComponent from 'components/about-us/sub-pages/Governance/contributor'
import GovernanceStartComponent from 'components/about-us/sub-pages/Governance/start'

export default function GovernancePage() {
  return (
    <PageContainer>
      <Container maxW={'5xl'}>
        <GovernanceIntroComponent />
        <GovernanceKickstartComponent />
        <GovernanceRequirementComponent />
        <GovernanceSeasonComponent />
        <GovernanceContributorComponent />
        <GovernanceStartComponent />
      </Container>
    </PageContainer>
  )
}
