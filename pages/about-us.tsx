import IntroductionAboutUsComponent from 'components/about-us/introduction'
import OurMissionAboutUsComponent from 'components/about-us/our-mission'
import OurVisionAboutUsComponent from 'components/about-us/our-vision'
import JoinUsAboutUsComponent from 'components/about-us/join-us'
import NewsLetterAboutUsComponent from 'components/common/newsletter-section'

export default function AboutUsPage() {
  return (
      <>
        <IntroductionAboutUsComponent />
        <OurMissionAboutUsComponent />
        <OurVisionAboutUsComponent />
        <JoinUsAboutUsComponent />
        <NewsLetterAboutUsComponent />
      </>
  )
}
