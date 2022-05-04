import IntroductionComponent from 'components/new-members/introduction'
import NewMembersJoinComponent from 'components/new-members/join'
import NewMemberJoinMethodComponent from 'components/new-members/join-method'

export default function NewMembersPage() {
  return (
    <>
      <IntroductionComponent />
      <NewMemberJoinMethodComponent />
      <NewMembersJoinComponent />
    </>
  )
}
