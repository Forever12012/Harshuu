import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import FloatingHearts from './components/FloatingHearts'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import TimelinePage from './pages/TimelinePage'
import LoveNotesPage from './pages/LoveNotesPage'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true)
  const [girlfriend, setGirlfriend] = useState({
    name: "Harshuuuuu", // Change this to your girlfriend's name
    specialDate: "2024-07-03", // Change this to your anniversary or special date
  })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen name={girlfriend.name} />
  }

  return (
    <div className="custom-cursor min-h-screen bg-gradient-to-b from-primary-50 to-secondary-50">
      <CustomCursor />
      <FloatingHearts />
      <Header name={girlfriend.name} />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage girlfriend={girlfriend} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/timeline" element={<TimelinePage anniversary={girlfriend.specialDate} />} />
            <Route path="/love-notes" element={<LoveNotesPage name={girlfriend.name} />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  )
}

export default App