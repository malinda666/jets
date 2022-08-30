import {
  useEffect,
  useState,
  createContext,
  FC,
  ReactNode,
  SetStateAction,
  Dispatch,
  useContext,
} from 'react'

interface MainContextProviderProps {
  children: ReactNode
}

interface MainContextProps {
  isExploreOpen: boolean
  setExploreOpen: Dispatch<SetStateAction<boolean>>
}

export const MainContext = createContext<MainContextProps | null>(null)

export const MainContextProvider: FC<MainContextProviderProps> = ({
  children,
}) => {
  const [isExploreOpen, setExploreOpen] = useState(false)

  // useEffect(() => {
  //   console.log('isExploreOpen', isExploreOpen)
  // }, [isExploreOpen])

  return (
    <MainContext.Provider value={{ isExploreOpen, setExploreOpen }}>
      {children}
    </MainContext.Provider>
  )
}

export const useMain = () => useContext(MainContext)
