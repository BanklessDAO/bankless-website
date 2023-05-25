import IntroductionAboutUs from 'components/about-us/introduction'
import OurMissionAboutUs from 'components/about-us/our-mission'
import OurVisionAboutUs from 'components/about-us/our-vision'
import JoinUsAboutUs from 'components/about-us/join-us'
import NewsLetterAboutUs from 'components/_common/newsletter-section'
import MiddleAboutUs from 'components/about-us/middle'
import SubnavAboutUs from 'components/about-us/subnav'
// import CirclesAboutUs from 'components/about-us/circles'
import CarouselSection from 'components/about-us/carousel'
import CirclesV2 from 'components/about-us/circlesV2'
import { useMediaQuery } from '@chakra-ui/react'

export default function AboutUsPage() {
  const [isMobile] = useMediaQuery('(max-width: 1040px)')

  return (
    <>
      <IntroductionAboutUs />
      {isMobile && <SubnavAboutUs />}
      <MiddleAboutUs />
      <OurMissionAboutUs />
      <CirclesV2 />
      <OurVisionAboutUs />
      <CarouselSection />
      <JoinUsAboutUs />
      <NewsLetterAboutUs />
    </>
  )
}
