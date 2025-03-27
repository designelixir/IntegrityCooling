import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
<footer className="basic-padding flex-start-spacebetween">
        <div>
            <Image src="/integrity-white-long.svg" height={90} width={200} alt="Integrity Heating / Cooling logo"></Image>
        </div>
        <div>
            <p><i className="white-text">Serving Florida and the Bahamas</i></p>
            <Link href="mailto:tc@integritycooling.com" className="flex-center-start">
                <Image src="./email.svg" height={20} width={30} style={{marginRight: '10px'}} alt="email icon"></Image>
                <p className="white-text">tc@integritycooling.com</p>
            </Link>
            <Link href="tel:7722296012" className="flex-center-start">
                <Image src="./phone.svg" height={25} width={25} style={{marginRight: '10px'}} alt="email icon"></Image>
                <p className="white-text">(772) 229-6012</p>
            </Link>

        </div>

    </footer>
    )
    
}