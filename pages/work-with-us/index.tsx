import { useState, useEffect } from 'react'
import { Container } from '@chakra-ui/react'
import PageContainer from 'components/common/page-container'
import IntroductionComponent from 'components/work-with-us/introduction'
import carouselsData from '../../assets/content/pages/work-with-us/carouselContent.json'
import Carousel from 'components/work-with-us/Carousel'

export default function WorkWithUsPage() {
  // TODO : refactor this into a hook
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
      <Container maxW={'1232px'} p={0}>
        <IntroductionComponent />
        {carouselsData.map((carousel, index) => (
          <Carousel width={width} carouselIndex={index} {...carousel}/>
        ))}
      </Container>
    </PageContainer>
  )
}
