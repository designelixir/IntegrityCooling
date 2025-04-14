import About from "./components/About";
import ContactForm from "./components/Contact";
import Hero from "./components/Hero";
import ServicesSummary from "./components/ServicesSummary";

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <div className="spacer" id="AboutSection"></div>
    <About></About>
    <ServicesSummary></ServicesSummary>
    
 
    
      
      <ContactForm></ContactForm>
      
    
    
    </>
    
  );
}
