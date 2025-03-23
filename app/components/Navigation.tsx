import Image from "next/image";

export default function Navigation(){
    return(
        <nav className="flex-center-spacebetween">
            <Image src="/integrity-white-long.svg" height={100} width={300} alt="Integrity Heating / Cooling logo"></Image>
            <div className="nav-links flex-center-center no-flex-grow">
                <a>About Us</a>
                <a>Services</a>
                <a>Contact</a>
                <button>Book a Consultation</button>
            </div>
        </nav>
    )
}