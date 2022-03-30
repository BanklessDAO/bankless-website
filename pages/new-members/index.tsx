import PageContainer from 'components/common/page-container'
import IntroductionComponent from 'components/new-members/introduction'
import NewMembersJoinComponent from 'components/new-members/join'
import NewMemberJoinMethodComponent from 'components/new-members/join-method'
import { Container } from '@chakra-ui/react'

export default function NewMembersPage() {
  return (
    <PageContainer>
      <Container maxW={'5xl'}>
        <IntroductionComponent />
        <NewMemberJoinMethodComponent />
        <NewMembersJoinComponent />
      </Container>
    </PageContainer>
  )
}
