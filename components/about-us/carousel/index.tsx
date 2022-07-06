import { useIsMobile } from 'components/_hooks/useIsMobile'
import DesktopView from './DesktopView'
import MobileView from './MobileView'

const Carousel = () => {
  const isMobile = useIsMobile()
  return isMobile ? <MobileView /> : <DesktopView />
}

export default Carousel
