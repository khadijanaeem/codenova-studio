import ContactForm from '../components/Contact.jsx'

export default function Contact() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-lead">
            [Placeholder — invite visitors to reach out about what's slowing
            their operations down, and let them know what happens after they submit.]
          </p>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
