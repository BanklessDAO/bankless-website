
import PageContainer from "components/common/page-container";
import NewsletterSection from "components/common/newsletter-section";
import MainImage from "components/about-us/main-image";
import AboutSection from "components/about-us/about-section";
import OurValuesSection from "components/about-us/our-values";
import JoinUsSection from "components/about-us/join-us";
import MissionSection from "components/about-us/mission-section";
import VisionSection from "components/about-us/vision-section";
import ImageOrbit from "components/about-us/image-orbit";

export default function AboutUsPage() {
    return (
        <PageContainer>
            <MainImage />
            <AboutSection />
            <MissionSection/>
            <ImageOrbit/>
            <VisionSection/>
            <OurValuesSection />
            <JoinUsSection/>
            <NewsletterSection />
        </PageContainer>
    )
}