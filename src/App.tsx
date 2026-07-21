import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AppProvider, useApp } from './context/AppContext'
import LoadingScreen from './components/layout/LoadingScreen'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MouseGlow from './components/ui/MouseGlow'

const Home = lazy(() => import('./pages/Home'))
const AIAssistant = lazy(() => import('./components/ai/AIAssistant'))

function AppContent() {
  const { isLoading, setIsLoading } = useApp()

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <MouseGlow />
          <Navbar />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
          <Suspense fallback={null}>
            <AIAssistant />
          </Suspense>
        </>
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </BrowserRouter>
  )
}
