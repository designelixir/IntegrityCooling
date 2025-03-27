export default function ServicesGrid() {
  const services = [
    {
      title: "Air Conditioning Installation & Replacement",
      description: "Efficient, reliable AC systems designed for your comfort and energy savings.",
    },
    {
      title: "Routine HVAC Maintenance",
      description: "Keep your systems running smoothly with our comprehensive maintenance plans to prevent unexpected breakdowns.",
    },
    {
      title: "Indoor Air Quality Solutions",
      description: "Improve the air you breathe with air purifiers, dehumidifiers, and UV light systems to reduce allergens and contaminants.",
    },
    {
      title: "Duct Cleaning & Sealing",
      description: "Enhance system efficiency and indoor air quality by removing dirt and debris from your ductwork.",
    },
    {
      title: "Smart Thermostat Installation",
      description: "Upgrade your home with smart thermostats for precise temperature control and energy savings.",
    },
    {
      title: "Energy Efficiency Consultations",
      description: "Our experts will help you optimize your HVAC system to reduce energy consumption and lower your utility bills.",
    },
    {
      title: "Custom HVAC System Design",
      description: "Tailored HVAC systems to meet the specific needs of your home or business for ultimate comfort and efficiency.",
    },
    {
      title: "Refrigeration Services",
      description: "Professional refrigeration installation, maintenance, and repair for commercial and residential needs.",
    },
    {
      title: "Heat Pump Installation & Repair",
      description: "Energy-efficient heat pump systems to keep your space comfortable year-round.",
    },
    {
      title: "Ductless Mini-Split Systems",
      description: "Flexible, energy-efficient solutions for targeted cooling and heating in specific rooms or areas.",
    },
    {
      title: "Air Quality Testing & Monitoring",
      description: "Get peace of mind with professional air quality assessments to ensure a healthier indoor environment.",
    },
    {
      title: "UV Light & Ionizer Installation",
      description: "Innovative solutions to eliminate bacteria, viruses, and mold in your HVAC system for cleaner air.",
    },
    {
      title: "HVAC System Upgrades",
      description: "Keep your system running at peak performance with the latest technology and energy-saving upgrades.",
    },
  ];
  return (
    <div>
        <div className="half-hero flex-end-start">
            <h1 className="white-text" style={{padding: '0', margin: '0'}}>Services</h1>
        </div>
        <div className="flex-center-center flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="service flex-center-center flex-column no-flex-grow gsap-objects">
              <h4 className="centered-text">{service.title}</h4>
              <p className="centered-text">{service.description}</p>
            </div>
          ))}
        </div>
    </div>
    
    
  );
}


