import Image from "next/image"
import BookButton from "./BookButton"

export default function About(){
    return(
        
        
        
        <section id="AboutSection"  className="basic-padding gsap-container flex-center-center flex-column" >
            <h3 className="centered-text gsap-objects">Welcome to Integrity Cooling, where we believe in delivering the perfect climate for your home or business. Serving the Treasure Coast, we stand by our motto, &apos;<strong>Your Comfort, Our Integrity,</strong>&apos; ensuring reliable HVAC solutions with a commitment to excellence and trust every step of the way.</h3>
            <div className="flex-start-spacebetween box-container basic-padding-top">
                <div className="flex-center-start flex-column no-flex-grow box gsap-objects">
                    <Image src="./award.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="color1-text"><strong>x years </strong>in service</h3>
                    
                </div>
                <div className="flex-center-start flex-column no-flex-grow box gsap-objects">
                    <Image src="./wrench.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="color1-text"><strong>x experienced</strong> technicians</h3>
                </div>
                <div className="flex-center-start flex-column no-flex-grow box gsap-objects">
                    <Image src="./happy.svg" alt="award icon" height={100} width={100}></Image>
                    <h3 className="color1-text"><strong>x happy </strong>customers</h3>
                </div>
            </div>
            <div className="flex-center-center no-flex-grow gsap-objects" style={{marginBottom: '50px'}}>
                <BookButton></BookButton>

            </div>
        </section>
        
    )
}