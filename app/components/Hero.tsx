import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
        <div className="hero-container flex-end-start ">
            <div className="hero-content-wrapper flex-center-center flex-column no-flex-grow" >
                <h1 className="centered-text white-text hero-h1 fade-in" style={{maxWidth: '800px'}}>Serving the Treasure Coast with <span style={{color: 'var(--navy)'}}>Integrity</span> </h1>
                <button className='book-consultation-button fade-in' style={{marginBottom: '25px'}}>Book a Consultation</button>
                <Link href="#AboutSection" className="flex-center-center no-flex-grow bouncing-arrow fade-in">
                    <Image src="/arrow.svg"  height={10} width={20} className="bounce-top" alt="bouncing arrow"></Image>
                </Link>
                
                
                
                
            </div>
            
        </div>
    )
}