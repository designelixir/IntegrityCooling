
import BookButton from "./BookButton"

export default function ServicesSummary(){
    return(
        <section className="basic-padding services-container gsap-container" style={{backgroundColor: "var(--color4)", paddingBottom: '100px'}}>
          <div className="spacer" id="ServicesSection"></div>
        <h2 className="centered-text gsap-objects">Services</h2>
        <p className="centered-text gsap-objects">Our technicians will go above and beyond to provide the best solution for your heating and cooling needs! 
          {/* If you see a service below that we can help you with, <strong>Book a Consultation</strong> to get started. We&apos;ll discuss your needs, provide a quote and timeline, and get your installation or repair on the books. No request is too big or too small! <strong> For special requests or inquiries, please <a href="#Contact">contact us.</a></strong> */}
          </p>
        <div className="box-container flex-center-center">
          <div className="card gsap-objects"  style={{backgroundColor: 'var(--color2)'}}>
            <div className="card-overlay">
              <h3 className="centered-text">Installation &amp; Repairs</h3>
              <br></br>
                <p className="centered-text">Routine HVAC Maintenance</p>
                <p className="centered-text">Air Conditioning Installation &amp; Replacement</p>
                <p className="centered-text">Custom HVAC System Design</p>
                <p className="centered-text">Heat Pump Installation &amp; Repairs</p>
            </div>
          </div>
          <div className="card gsap-objects" style={{backgroundColor: 'var(--color2)'}}>
            <div className="card-overlay">
              <h3 className="centered-text">Upgrades &amp; Efficiency </h3>
              <br></br>
              
                <p className="centered-text">Indoor Air Quality Solutions</p>
                <p className="centered-text">Smart Thermostat Installation</p>
                
                <p className="centered-text">Ductless Mini-Split Systems</p>
                <p className="centered-text">UV Light &amp; Ionizer Installation</p>
                <p className="centered-text">HVAC System Upgrades</p>
              
            </div>
          </div>
          <div className="card gsap-objects"  style={{backgroundColor: 'var(--color2)'}}>
            <div className="card-overlay">
              <h3 className="centered-text">Routine Services &amp; Maintenance</h3>
              <br></br>
              
                <p className="centered-text">Duct Cleaning &amp; Sealing</p>
                <p className="centered-text">Refridgeration Services</p>
                <p className="centered-text">Air Quality Testing & Monitoring</p>
                <p className="centered-text">Energy Efficiency Consultations</p>
              
            </div>
          </div>
        
        </div>
        <div className="flex-center-center no-flex-grow gsap-objects" style={{margin: '25px 50px'}}>
                <BookButton></BookButton>

            </div>
      </section>
    )
}