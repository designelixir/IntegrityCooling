import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
<footer className="basic-padding flex-center-center flex-column full-width">
    <div className="flex-center-spacebetween full-width footer-top" >
        
        <Image src="/integrity-white-long.svg" height={90} width={200} alt="Integrity Heating / Cooling logo"></Image>
        <div className="full-width flex-end-end flex-column footer-contact">
            <p><i className="white-text" style={{fontWeight: '600'}}>Serving Florida and the Bahamas</i></p>
            <Link href="mailto:tc@integritycooling.com" className="flex-center-start margin-top-10 no-link-styling">
                <Image src="./email.svg" height={20} width={20} className="margin-right-10" alt="email icon"></Image>
                <p className="white-text m-text">tc@integritycooling.com</p>
            </Link>
            <Link href="tel:7722296012" className="flex-center-start no-link-styling">
                <Image src="./phone.svg" height={25} width={20}  className="margin-right-10" alt="email icon"></Image>
                <p className="white-text m-text">(772) 229-6012</p>
            </Link>

        </div>
    </div>
    <div className="basic-padding-top-bottom flex-center-center flex-column">
        <p className="m-text white-text centered-text">Copyright &copy; Integrity Cooling and Heating 2025</p>
        <Link href="https://designelixir.studio" className="no-link-styling centered-text xs-text white-text hover" style={{opacity: '0.5'}} target="_blank">Made with &hearts; by Design Elixir Studio</Link>
    </div>
       

    </footer>
    )
    
}