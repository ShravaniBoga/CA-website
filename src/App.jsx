import React from 'react'
import Header from './components/header/Header'
import Nav from './components/navBar/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Audit_services from './components/audit/Audit_services'
import Direct_tax from './components/direct_tax/Direct_tax'
import Indirect_tax from './components/indirect_tax/Indirect_tax'
import CFO_services from './components/cfo_services/CFO_services'
import Corporate_services from './components/corporate_services/Corporate_services'
import Consultancy from './components/consultancy/Consultancy'
import Resources from './components/resources/Resources'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// ####drop-down for about 
import DD_Partners from './components/DD_About/DD_Partners'
import DD_KeyDifferentiators from './components/DD_About/DD_KeyDifferentiators'
import DD_CoreValues from './components/DD_About/DD_CoreValues'
import DD_SocialResponsibilities from './components/DD_About/DD_SocialResponsibilities'


const App = () => {
  return (
    <div>

      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/audit-services' element={<Audit_services />} />
        <Route path='/direct-tax' element={<Direct_tax />} />
        <Route path='/indirect-tax' element={<Indirect_tax />} />
        <Route path='/cfo-services' element={<CFO_services />} />
        <Route path='/corporate-services' element={<Corporate_services />} />
        <Route path='/consultancy' element={<Consultancy />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/contact' element={<Contact />} />
        {/* ####drop-down for about  */}
        <Route path="/partners" element={<DD_Partners />} />
        <Route path="/key-differentiators" element={<DD_KeyDifferentiators />} />
        <Route path="/core-values" element={<DD_CoreValues />} />
        <Route path="/social-responsibilities" element={<DD_SocialResponsibilities />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
