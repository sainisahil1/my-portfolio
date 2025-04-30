import ProjectCard from "../components/ProjectCard";
import TypingAnimation from "../components/TypingAnimation";
import { ProjectImage, ProjectProps } from "../components/Utils";

export default function ProjectsPage() {

    const arduinoImage1: ProjectImage = {
        src: "/arduino_circuit.jpg",
        alt: "circuit",
        subtitle: "Working Arduino Circuit",
        height: 400,
        width: 400
    }

    const arduinoImage2: ProjectImage = {
        src: "/arduino_flow.png",
        alt: "flow",
        subtitle: "Project Logic and Data Pipeline",
        height: 500,
        width: 500
    }

    const arduinoProject: ProjectProps = {
        title: "Arduino Power Monitor",
        url: "https://github.com/sainisahil1/arduino-power-monitor",
        description: [
            "Designed and implemented a complete IoT system using Arduino, MQTT, Spring Boot, and React.js to monitor energy consumption of connected devices.",
            "Developed Arduino firmware in C++ to collect real-time current readings and transmit data via MQTT protocol using EMQX broker.",
            "Built a Spring Boot backend that subscribes to MQTT topics for real-time data ingestion, processes device analytics, and stores time-series data in InfluxDB.",
            "Chose InfluxDB for its performance with time-based data, leveraging features like downsampling, retention policies, and inverse indexing for historical querying.",
            "Enabled real-time and historical visualization through a web dashboard (React.js) and a mobile app, both subscribing to the same MQTT topics.",
            "Implemented daily, weekly, and monthly consumption analysis, with backend APIs providing statistical summaries.",
            "Designed the system to support scalability and low latency, ensuring smooth real-time updates across all clients.",
            "Focused on modular architecture with clear separation between device, broker, backend processing, and client interfaces.",
        ],
        images: [arduinoImage1, arduinoImage2],
        tags: ["Arduino", "MQTT", "Spring Boot", "InfluxDB", "React.js"]
    }

    const shoppeImage1: ProjectImage = {
        src: "/shoppe1.jpg",
        alt: "circuit",
        subtitle: "Home Page",
        height: 400,
        width: 200
    }

    const shoppeImage2: ProjectImage = {
        src: "/shoppe2.jpg",
        alt: "flow",
        subtitle: "Login Page",
        height: 400,
        width: 200
    }

    const shoppe: ProjectProps = {
        title: "Shoppe (Current)",
        url: "https://github.com/sainisahil1/Shoppe",
        description: [
            "Built a modern e-commerce Android application using Jetpack Compose.",
            "Implemented composable UI components for product listings, detail pages, cart functionality, and bottom navigation.",
            "Focused on clean architecture with modular components to allow easy future API integration and state management.",
            "Achieved pixel-perfect UI fidelity by carefully translating Figma layouts into Compose design system.",
            "Ensured responsive layout across different screen sizes and orientations.",
        ],
        images: [shoppeImage1, shoppeImage2],
        tags: ["Android", "Kotlin", "Jetpack Compose", "Room", "Clean Architecture"]
    }

    const f1Image1: ProjectImage = {
        src: "/f1mob1.jpeg",
        alt: "circuit",
        subtitle: "Mobile app home page with races filtered by the year.",
        height: 500,
        width: 500
    }

    const f1Image2: ProjectImage = {
        src: "/f1mob2.jpeg",
        alt: "flow",
        subtitle: "Standings for the selected race.",
        height: 500,
        width: 500
    }

    const f1Image3: ProjectImage = {
        src: "/f1web.jpeg",
        alt: "flow",
        subtitle: "Web app displaying standings filtered by year and race.",
        height: 500,
        width: 500
    }

    const f1Dashboard: ProjectProps = {
        title: "Formula 1 Dashboard Fullstack App",
        url: "https://github.com/sainisahil1/formula1-dashboard",
        description: [
            "Fullstack project to browse Formula 1 races by year with race results, circuits, and locations",
            "Web app built using React.js, Hooks, and CSS",
            "Android app built with MVVM, LiveData, Data Binding, Retrofit, and Coroutines",
            "Backend built with Spring Boot, Spring Batch, JPA, and JPQL",
            "Used HSQLDB as in-memory database for development",
            "Deployed web app on AWS Elastic Beanstalk",
            "REST APIs power both web and mobile interfaces",
            "Emphasis on learning fullstack development with real-world racing data",
        ],
        images: [f1Image1, f1Image2, f1Image3],
        tags: ["Spring Boot", "React.js", "React Hooks", "Android", "Spring Batch", "Java Persistence API", "HSQL", "MVVM", "Coroutines", "Retrofit"]
    }

    const tripImage1: ProjectImage = {
        src: "/tripapp1.jpeg",
        alt: "circuit",
        subtitle: "Home page to start/stop location tracking",
        height: 400,
        width: 200
    }

    const tripImage2: ProjectImage = {
        src: "/tripapp2.jpeg",
        alt: "flow",
        subtitle: "Locally saved trips.",
        height: 400,
        width: 200
    }

    const tripImage3: ProjectImage = {
        src: "/tripapp3.jpeg",
        alt: "flow",
        subtitle: "Trip route visualization on a map.",
        height: 400,
        width: 200
    }

    const tripApp: ProjectProps = {
        title: "Trip Management App",
        url: "https://github.com/sainisahil1/Trip_Management_App",
        description: [
            "Android app to record and visualize trips on Google Maps.",
            "Uses Fused Location Provider for accurate and efficient location tracking.",
            "Trips are stored locally using Room Database for offline access.",
            "Implements MVVM architecture, Coroutines, and LiveData for robust performance.",
            "Integrated Google Maps SDK for interactive trip visualization.",
            "Debug APK included for quick testing and deployment.",
        ],
        images: [tripImage1, tripImage2, tripImage3],
        tags: ["Android", "Room", "MVVM", "Data Binding", "Coroutines", "Fused Location Provider", "Google Maps"]
    }

    const portfolio: ProjectProps = {
        title: "My Portfolio (Current)",
        url: "https://github.com/sainisahil1/my-portfolio",
        description: [
            "Built with Next.js (App Router) and styled using Tailwind CSS.",
            "Features typing animation headline and responsive multi-page layout.",
            "Sections include Skills, Experience, Projects, and Services.",
            "Includes external links to LinkedIn and GitHub.",
            "Clean and maintainable code with ESLint and PostCSS.",
            "Future updates planned: page transition animations and project filtering.",
        ],
        images: [],
        tags: ["Next.js", "React.js", "Tailwind CSS", "React Icons"]
    }

    return (
        <div className="flex flex-col gap-10 items-center justify-center font-mono">

            <TypingAnimation text="Projects" size="text-4xl" />

            <ProjectCard
                details={arduinoProject}
            />

            <ProjectCard
                details={f1Dashboard}
            />

            <ProjectCard
                details={tripApp}
            />



            <ProjectCard
                details={shoppe}
            />

            <ProjectCard
                details={portfolio}
            />


            <div className="h-4" />

        </div>
    );
}
