import { useState, useCallback, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { BlobBg }       from './components/BlobBg'
import { Navbar }       from './components/Navbar'
import { Footer }       from './components/Footer'
import { Hero }         from './sections/Hero'
import { Skills }       from './sections/Skills'
import { Projects }     from './sections/Projects'
import { Stats }        from './sections/Stats'
import { Hire }         from './sections/Hire'
import { Contact }      from './sections/Contact'
import { AllProjects }  from './pages/AllProjects'

function HomePage({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Stats />
        <Hire />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <>
      <BlobBg />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/projects" element={<AllProjects theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </>
  )
}