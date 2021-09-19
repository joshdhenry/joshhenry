import { useEffect, useState } from 'react'

import { MAX_WIDTH_MOBILE } from '../config/constants'

const useViewport = () => {
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  const isMobile = width < MAX_WIDTH_MOBILE

  return { height, isMobile, width }
}

export default {
  useViewport,
}
