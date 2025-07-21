import Image from "next/image"
import BookButton from "./BookButton"

export default function About(){
    return(
        
        
        
        <section id="AboutSection"  className="basic-padding gsap-container flex-center-center flex-column" >
            <h3 className="centered-text gsap-objects">Welcome to Integrity Cooling, where we believe in delivering the perfect climate for your home or business. Serving the Treasure Coast, we stand by our motto, &apos;<strong>Your Comfort, Our Integrity,</strong>&apos; ensuring reliable HVAC solutions with a commitment to excellence and trust every step of the way.</h3>
            
            <div className="flex-center-center no-flex-grow gsap-objects" style={{marginBottom: '50px'}}>
                <BookButton></BookButton>

            </div>
        </section>
        
    )
}