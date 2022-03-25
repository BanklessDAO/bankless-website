import { Container } from '@chakra-ui/react'
import PageContainer from 'components/common/page-container'
import NodesIntroComponent from 'components/about-us/sub-pages/ndoes/intro'
import DaoPunksComponent from 'components/about-us/sub-pages/ndoes/dao-punks'
import NodesBanklessHQComponent from 'components/about-us/sub-pages/ndoes/bankless-headquater'
import NodesInternationalMediaComponent from 'components/about-us/sub-pages/ndoes/international-media-nodes'

export default function NodesPage() {
  return (
    <PageContainer>
      <Container maxW={'5xl'}>
        <NodesIntroComponent />
        <DaoPunksComponent />
        <NodesBanklessHQComponent />
        <NodesInternationalMediaComponent />
      </Container>
    </PageContainer>
  )
}
