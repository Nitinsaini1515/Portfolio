import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import SkillsPage from './components/SkillsPage'
import AboutMe from './components/AboutMe'
import CertificationPage from './components/CertificationPage'
import MyProjects from './components/MyProjects'
import ContactMe from './components/ContactMe'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <SkillsPage/>
      <AboutMe/>
      <MyProjects/>
      <CertificationPage/>
      <ContactMe/>
    </div>
  )
}
export default App
