import { Box } from '@chakra-ui/react'
import BanklessAcademyComponent from './content/bankless-academy'
import ProjectBanklessConsultingComponent from './content/bankless-consulting'
import BanklessLoansComponent from './content/bankless-loans'
import ProjectBountyBoardComponent from './content/bounty-board'
import ContentGatewayComponent from './content/content-gateway'
import CryptoSapiensComponent from './content/crypto-sapiens'
import DaoHeatComponent from './content/dao-heat'
import DaoversityComponent from './content/daoversity'
import DecentralizeLawNewsletterComponent from './content/decentralizes-law-newsletter'
import DegenProjectComponent from './content/degen-project'
import EditArmProjectComponent from './content/edit-arm'
import FightClubComponent from './content/fight-club'
import FirstQuestComponent from './content/first-quest'
import InternationalMediaNodesComponent from './content/international-media-nodes'
import MobileAppComponent from './content/mobile-app'
import NewsletterProjectComponent from './content/newsletter-project'
import PodcastHatcheryComponent from './content/podcast-hatchery'
import WebsiteProjectComponent from './content/website-project'

export default function ProjectsContentComponent() {
  return (
    <Box display={'flex'} flexDir='column' alignItems={'center'}>
      <ProjectBanklessConsultingComponent />
      <DegenProjectComponent />
      <ProjectBountyBoardComponent />
      <NewsletterProjectComponent />
      <EditArmProjectComponent />
      <PodcastHatcheryComponent />
      <DaoversityComponent />
      <DaoHeatComponent />
      <WebsiteProjectComponent />
      <FightClubComponent />
      <BanklessLoansComponent />
      <BanklessAcademyComponent />
      <ContentGatewayComponent />
      <MobileAppComponent />
      <CryptoSapiensComponent />
      <FirstQuestComponent />
      <InternationalMediaNodesComponent />
      <DecentralizeLawNewsletterComponent />
    </Box>
  )
}
