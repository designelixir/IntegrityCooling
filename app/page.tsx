import ContactForm from "./components/Contact";


import ServicesGrid from "./components/ServicesGrid";

export default function Home() {
  return (
    <>
    <section className="flex-center-center hero ">
      <div className="flex-center-center flex-column hero-overlay basic-padding">
        <h1 className="centered-text white-text text-shadow">Serving the Treasure Coast <br></br>with Integrity </h1>
        <button>Book a Consultation</button>
      </div>
    </section>
    <section className="basic-padding">
    <h3 className="centered-text">Welcome to Integrity Cooling, where we believe in delivering the perfect climate for your home or business. Serving the Treasure Coast, we stand by our motto, &apos;<strong>Your Comfort, Our Integrity,</strong>&apos; ensuring reliable HVAC solutions with a commitment to excellence and trust every step of the way.</h3>
    </section>
    <section className="basic-padding">
      <h2 className="centered-text">Services</h2>
      <ServicesGrid></ServicesGrid>
    </section>
    <section className="flex-center-center flex-column basic-padding">
      <h2 className="centered-text">Contact Us</h2>
      <p className="centered-text" style={{marginBottom: '25px'}}>Fill out the form below with any questions, comments or inquiries. You can also Book a Consultation to get a quote, do x y z, etc. </p>
      <ContactForm></ContactForm>
      
    </section>
    
    </>
    
  );
}
