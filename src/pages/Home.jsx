import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Clients from '../components/Clients.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import Industries from '../components/Industries.jsx'
import WhyUs from '../components/WhyUs.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Clients />
      <CaseStudies />
      <Industries />
      <WhyUs />
      {/*<Testimonials />  */}
      <Contact />
    </>
  )
}
