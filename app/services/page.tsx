import ServiceCard from "../components/ServiceCard";
import TypingAnimation from "../components/TypingAnimation";

export default function Services() {
    return(
        <div className="container mx-auto p-4">
    
    <div className="flex items-center justify-center mb-8">
      <TypingAnimation text="My Freelance Services" size="text-3xl"/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ServiceCard
          title="Mobile App Development"
          description="I create sleek, high-performance mobile apps using Android, React Native or Flutter, tailored to your business needs."
          skills="Android, React Native, Flutter"
        />
        
        <ServiceCard
          title="Frontend Development"
          description="I develop responsive and dynamic websites with React.js, providing a smooth user experience."
          skills="React.js, Next.js, HTML, CSS, JavaScript"
        />
        
        <ServiceCard
          title="Backend Development"
          description="I build powerful backend services with Spring Boot, ensuring fast, reliable data handling."
          skills="Spring Boot, Node.js, Express.js, MongoDB, Redis, InfluxDB, MySQL"
        />
        
      </div>

      <div className="text-center mt-8">
        <a href="mailto:sahils123saini@gmail.com" className="myButton px-6 py-2 rounded-md">Contact Me</a>
      </div>
    </div>
    );
}