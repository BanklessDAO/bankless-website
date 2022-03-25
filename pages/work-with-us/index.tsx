import { useState, useEffect } from 'react'
import PageContainer from 'components/common/page-container'
import IntroductionComponent from 'components/work-with-us/introduction'
import ConsultComponent from 'components/work-with-us/consult'
import SoftwareComponent from 'components/work-with-us/software'
import ServiceComponent from 'components/work-with-us/service'
import MarketComponent from 'components/work-with-us/market'
import { Container } from '@chakra-ui/react'

export default function WorkWithUsPage() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(document.body.clientWidth)
  }, [])

  typeof window !== 'undefined' &&
    window.addEventListener('resize', function () {
      setWidth(document.body.clientWidth)
    })

  return (
    <PageContainer>
      <Container maxW={'5xl'}>
        <IntroductionComponent />
        <ConsultComponent width={width} />
        <SoftwareComponent width={width} />
        <ServiceComponent width={width} />
        <MarketComponent width={width} />
      </Container>
    </PageContainer>
  )
}
