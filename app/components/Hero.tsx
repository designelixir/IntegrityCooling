'use client'
import BookButton from "./BookButton";
import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return(
        <section className="flex-center-start flex-column hero-container fade-in">
            <div className="hero-wrapper hero-background-image flex-center-end flex-column">
                <h1 className="centered-text white-text text-shadow fade-in">Your Comfort, <br className="hero-break"></br> Our Integrity </h1>
                <BookButton></BookButton>
            </div>
            <Link href="#AboutSection" className="flex-center-center no-flex-grow bouncing-arrow fade-in">
                <Image src="/arrow.svg"  height={10} width={20} className="bounce-top" style={{marginTop: '10px'}} alt="bouncing arrow"></Image>
            </Link>
        </section>
    )
}