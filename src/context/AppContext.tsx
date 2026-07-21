import { createContext, useContext, useState, type ReactNode } from 'react'

interface AppContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  isAIChatOpen: boolean
  setIsAIChatOpen: (open: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAIChatOpen, setIsAIChatOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{ isLoading, setIsLoading, isAIChatOpen, setIsAIChatOpen }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
