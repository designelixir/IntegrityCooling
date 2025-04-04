import Image from "next/image"
import Link from "next/link"

export default function About(){
    return(
        <section style={{backgroundColor: 'rgba(171, 177, 193, 0.15)'}}>
        <Link href="#AboutSection" className="flex-center-center no-flex-grow bouncing-arrow fade-in">
                    <Image src="/arrow.svg"  height={10} width={20} className="bounce-top" alt="bouncing arrow"></Image>
                </Link>
        
        <section id="AboutSection"  className="basic-padding gsap-container flex-center-center flex-column" >
            <h3 className="centered-text gsap-objects">Welcome to Integrity Cooling, where we believe in delivering the perfect climate for your home or business. Serving the Treasure Coast, we stand by our motto, &apos;<strong>Your Comfort, Our Integrity,</strong>&apos; ensuring reliable HVAC solutions with a commitment to excellence and trust every step of the way.</h3>
            <div className="flex-center-spacebetween box-container">
                <div className="flex-center-center flex-column no-flex-grow box gsap-objects">
                    <Image src="./award.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="navy-text"><strong>x years </strong> <span className="box-break"><br></br></span>in service</h3>
                </div>
                <div className="flex-center-center flex-column no-flex-grow box gsap-objects">
                    <Image src="./wrench.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="navy-text"><strong>x experienced</strong> <span className="box-break"><br></br></span>technicians</h3>
                </div>
                <div className="flex-center-center flex-column no-flex-grow box gsap-objects">
                    <Image src="./happy.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="navy-text"><strong>x happy </strong><span className="box-break"><br></br></span>customers</h3>
                </div>
            </div>
            <div className="flex-center-center no-flex-grow gsap-objects" style={{marginBottom: '50px'}}>
                <button className="button-2">Book a Consultation</button>

            </div>
        </section>
        </section>
    )
}