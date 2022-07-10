import { useState, useEffect } from 'react'

export const useIsMobile = () => {
  const MOBILE_BREAKPOINT = 600
  const [width, setWidth] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  useEffect(() => {
    if (width) {
      setIsMobile(width <= MOBILE_BREAKPOINT)
    }
  }, [width])

  return isMobile
}
