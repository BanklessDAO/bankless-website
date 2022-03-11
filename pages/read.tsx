import PageContainer from 'components/common/page-container'

import Hero from 'components/read/hero'
import Newsletter from 'components/read/newsletters'
import IntMediaNode from 'components/read/international-media-node'

export default function ReadPage() {
  return (
    <PageContainer>
      <Hero />
      <Newsletter />
      <IntMediaNode />
    </PageContainer>
  )
}
