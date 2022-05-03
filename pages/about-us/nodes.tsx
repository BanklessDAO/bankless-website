import NodesIntroComponent from 'components/about-us/sub-pages/nodes/intro'
import DaoPunksComponent from 'components/about-us/sub-pages/nodes/dao-punks'
import NodesBanklessHQComponent from 'components/about-us/sub-pages/nodes/bankless-headquater'
import NodesInternationalMediaComponent from 'components/about-us/sub-pages/nodes/international-media-nodes'

export default function NodesPage() {
  return (
    <>
      <NodesIntroComponent />
      <DaoPunksComponent />
      <NodesBanklessHQComponent />
      <NodesInternationalMediaComponent />
    </>
  )
}
