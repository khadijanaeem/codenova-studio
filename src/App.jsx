import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ServicesOverview from './pages/ServicesOverview.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import CaseStudiesPage from './pages/CaseStudiesPage.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
