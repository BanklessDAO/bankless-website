import IntroductionAboutUs from 'components/about-us/introduction'
import OurMissionAboutUs from 'components/about-us/our-mission'
import OurVisionAboutUs from 'components/about-us/our-vision'
import JoinUsAboutUs from 'components/about-us/join-us'
import NewsLetterAboutUs from 'components/common/newsletter-section'
import MiddleAboutUs from 'components/about-us/middle'

export default function AboutUsPage() {
  return (
      <>
        <IntroductionAboutUs />
        <MiddleAboutUs/>
        <OurMissionAboutUs />
        <OurVisionAboutUs />
        <JoinUsAboutUs />
        <NewsLetterAboutUs />
      </>
  )
}
