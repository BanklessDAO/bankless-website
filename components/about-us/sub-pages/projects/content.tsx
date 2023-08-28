import { Box } from '@chakra-ui/react'
import BanklessAcademyComponent from './content/bankless-academy'
import ProjectBanklessConsultingComponent from './content/bankless-consulting'
import BanklessLoansComponent from './content/bankless-loans'
import ProjectBountyBoardComponent from './content/bounty-board'
import ContentGatewayComponent from './content/content-gateway'
import CryptoSapiensComponent from './content/crypto-sapiens'
import DaoversityComponent from './content/daoversity'
import DecentralizeLawNewsletterComponent from './content/decentralizes-law-newsletter'
import EditArmProjectComponent from './content/edit-arm'
import FightClubComponent from './content/fight-club'
import FirstQuestComponent from './content/first-quest'
import InternationalMediaNodesComponent from './content/international-media-nodes'
import MobileAppComponent from './content/mobile-app'
import NewsletterProjectComponent from './content/newsletter-project'
import PodcastHatcheryComponent from './content/podcast-hatchery'
import WebsiteProjectComponent from './content/website-project'
import InfoSecTeamComponent from './content/infosec-team'
import BanklessCardComponent from './content/bankless-card'
import GovernatorComponent from './content/governator'
import  TheRugComponent  from './content/the-rug'

export default function ProjectsContentComponent() {
  return (
    <Box display={'flex'} flexDir='column' alignItems={'center'}>
      <BanklessCardComponent />
      <ProjectBanklessConsultingComponent />
      <ProjectBountyBoardComponent />
      <NewsletterProjectComponent />
      <EditArmProjectComponent />
      <PodcastHatcheryComponent />
      <DaoversityComponent />
      <FightClubComponent />
      <BanklessLoansComponent />
      <BanklessAcademyComponent />
      <ContentGatewayComponent />
      <MobileAppComponent />
      <CryptoSapiensComponent />
      <FirstQuestComponent />
      <InternationalMediaNodesComponent />
      <DecentralizeLawNewsletterComponent />
      <InfoSecTeamComponent />
      <WebsiteProjectComponent />
      <GovernatorComponent />
      <TheRugComponent />
    </Box>
  )
}
