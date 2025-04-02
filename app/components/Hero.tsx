
export default function Hero(){
    return(
        <div className="hero-container flex-end-start ">
            <div className="hero-content-wrapper flex-center-center flex-column no-flex-grow" >
                <h1 className="centered-text white-text text-shadow fade-in" style={{maxWidth: '800px'}}>Your Comfort, <span style={{color: 'var(--navy)'}}>Our Integrity</span> </h1>
                <button className='button-1' style={{marginBottom: '25px'}}>Book a Consultation</button>
                
            </div>
            
        </div>
    )
}