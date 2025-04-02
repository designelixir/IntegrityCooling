import Link from "next/link"

export default function ServicesSummary(){
    return(
        <section className="basic-padding services-container gsap-container">
        <h2 className="centered-text gsap-objects">Services</h2>
        <p className="centered-text gsap-objects">Our technicians will go above and beyond to provide the best solution for your heating and cooling needs! If you see a service below that we can help you with, <strong>Book a Consultation</strong> to get started. We&apos;ll discuss your needs, provide a quote and timeline, and get your installation or repair on the books. No request is too big or too small! <strong> For special requests or inquiries, please <a href="#Contact">contact us.</a></strong></p>
        <div className="box-container flex-center-center">
          <div className="card gsap-objects"  style={{background: '#2578BB'}}>
            <div className="card-overlay">
              <h3 className="centered-text ">Installation &amp; Repairs</h3>
              <ul className="flex-center-center flex-column">
                <li>Routine HVAC Maintenance</li>
                <li>Air Conditioning Installation &amp; Replacement</li>
                <li>Custom HVAC System Design</li>
                <li>Heat Pump Installation &amp; Repairs</li>
              </ul>
            </div>
          </div>
          <div className="card gsap-objects" style={{background: '#2578BB'}}>
            <div className="card-overlay">
              <h3 className="centered-text ">Upgrades &amp; Efficiency </h3>
              <ul className="flex-center-center flex-column">
                <li>Indoor Air Quality Solutions</li>
                <li>Smart Thermostat Installation</li>
                
                <li>Ductless Mini-Split Systems</li>
                <li>UV Light &amp; Ionizer Installation</li>
                <li>HVAC System Upgrades</li>
              </ul>
            </div>
          </div>
          <div className="card gsap-objects"  style={{background: '#2578BB'}}>
            <div className="card-overlay">
              <h3 className="centered-text ">Routine Services &amp; Maintenance</h3>
              <ul className="flex-center-center flex-column">
                <li>Duct Cleaning &amp; Sealing</li>
                <li>Refridgeration Services</li>
                <li>Air Quality Testing & Monitoring</li>
                <li>Energy Efficiency Consultations</li>
              </ul>
            </div>
          </div>
        
        </div>
        <div className="flex-center-center">
          <Link href="/services">
          <button className="button-2">View All Services</button>
          </Link>
        </div>
      </section>
    )
}