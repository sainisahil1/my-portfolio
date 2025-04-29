import Button from "./components/Button";
import TypingAnimation from "./components/TypingAnimation";

export default function Home() {
  return (
    <div className="home-container font-mono">
      
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        
        <div className="column text-center">
          <h1 className="name text-7xl font-bold">Sahil Saini</h1>
          <TypingAnimation text="Software Engineer | Developer | Problem Solver"/>
        </div>
        
        <div className="flex gap-10 mt-10 text-xl">
          <a href="https://www.linkedin.com/in/sahilsaini01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sainisahil1" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="buttons flex gap-15 text-xl mt-10">
          <Button text="Tech Stack" link="/tech_stack" />
          <Button text="Work Experience" link="/work_experience" />
          <Button text="Projects" link="/projects" />
          <Button text="Services" link="/services" />
      </div>

    </div>

    </div>
  );
}
