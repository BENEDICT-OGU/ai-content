import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import ContentTemplates from './components/ContentTemplates'
import Analytics from './components/Analytics'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'
// import GetStarted from "./pages/GetStarted"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero darkMode={darkMode} />
              <Features darkMode={darkMode} />
              <Pricing darkMode={darkMode} />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode} />} />
          <Route path="/templates" element={<ContentTemplates darkMode={darkMode} />} />
          <Route path="/analytics" element={<Analytics darkMode={darkMode} />} />
          <Route path="/team" element={<Team darkMode={darkMode} />} />
          {/* <Route path="/get-started" element={<GetStarted darkMode={darkMode} />} /> */}
          <Route path="/pricing" element={<Pricing darkMode={darkMode} />} />
        </Routes>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  )
}

export default App