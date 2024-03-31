import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'

const bannerSeenStorageKey = 'architecture-fga-webinar-banner-seen'

interface PlaygroundBannerParams {
  hideBanner: () => void
  isVisible: boolean
}

const PlaygroundBannerContext = createContext<PlaygroundBannerParams>({
  hideBanner: () => {},
  isVisible: false
})
interface PlaygroundBannerContextParams {
  children: React.ReactNodedg
}

export const PlaygroundBannerContextProvider = ({
  children
}: PlaygroundBannerContextParams) => {
  const [isVisible, setIsVisible] = useState(false)

  const hideBanner = useCallback(() => {
    setIsVisible(false)
    localStorage.setItem(bannerSeenStorageKey, 'true')
  }, [])

  useEffect(() => {
    if (!isVisible && localStorage.getItem(bannerSeenStorageKey) === null) {
      setIsVisible(true)
    }
  }, [isVi
  

  return (
    <PlaygroundBannerContext.Provider value={value}>
      {children}
    </PlaygroundBannerContext.Provider>
  )
}

export default PlaygroundBannerContext
