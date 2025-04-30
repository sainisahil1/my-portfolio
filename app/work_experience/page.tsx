
import ExperienceCard from "../components/ExperienceCard";
import TypingAnimation from "../components/TypingAnimation";
import { WorkDetails, WorkDuration, WorkImage } from "../components/Utils";

export default function WordExperience() {

    // --- Roam SDE II

    const roamSde2Duration: WorkDuration = {
        from: "Jan 2023",
        to: "Aug 2024"
    }

    const roamSde2Image1: WorkImage = {
        src: '/team.svg',
        alt: 'Team',
        height: 176,
        width: 176
    }

    const roamSde2Image2: WorkImage = {
        src: '/mobile_app.svg',
        alt: 'Infra',
        height: 176,
        width: 176
    }

    const roamSde2: WorkDetails = {
        role: 'Software Development Engineer II',
        company: 'Roam.ai',
        duration: roamSde2Duration,
        images: [roamSde2Image1, roamSde2Image2],
        description: [
            "Owned and scaled the Mobile SDK, delivering production-grade solutions.",
            "Built location-based check-in/check-out for public transport apps.",
            "Developed anti-spoofing security modules and optimized battery usage.",
            "Enhanced architecture and reduced infrastructure costs by 30%.",
            "Key contributor during the company’s acquisition and led Agile cycles."
        ],
        tags: ["Product", "Owner", "Agile", "Mobile", "Web", "R&D"]
    }

    // --- Roam SDE I

    const roamSde1Duration: WorkDuration = {
        from: "Jan 2022",
        to: "Dec 2022"
    }

    const roamSde1Image1: WorkImage = {
        src: '/location.svg',
        alt: 'Team',
        height: 176,
        width: 176
    }

    const roamSde1: WorkDetails = {
        role: 'Software Development Engineer I',
        company: 'Roam.ai',
        duration: roamSde1Duration,
        images: [roamSde1Image1],
        description: [
            "Built a high-accuracy, energy-efficient location tracking SDK.",
            "Created “Roam Around”, a React Native app showcasing SDK capabilities.",
            "Improved Flutter and React Native libraries for better integration and performance.",
            "Implemented Headless JS to handle tracking after device reboots.",
            "Built new features to the Roam Web Dashboard.",
        ],
        tags: ["Android", "React Native", "Flutter", "iOS", "React.js"]
    }

    // --- Gypsee

    const gypseeDuration: WorkDuration = {
        from: "Mar 2021",
        to: "Jan 2022"
    }

    const gypseeImage1: WorkImage = {
        src: '/trip.svg',
        alt: 'Team',
        height: 176,
        width: 176
    }

    const gypseeImage2: WorkImage = {
        src: '/repair.svg',
        alt: 'Team',
        height: 176,
        width: 176
    }

    const gypsee: WorkDetails = {
        role: 'Android Developer',
        company: 'Gypsee.ai',
        duration: gypseeDuration,
        images: [gypseeImage1, gypseeImage2],
        description: [
            "Built a safe driving rewards app using BLE, GPS, Bluetooth 5.0, REST APIs, and third-party libraries.",
            "Developed a trip recording system with smart resource and battery management.",
            "Implemented auto-sleep for GPS during inactivity and automated trip capture via Bluetooth and Activity Recognition API.",
            "Integrated OBD-II support for real-time vehicle data tracking.",
        ],
        tags: ["Android", "OBDII", "BLE", "GPS"]
    }

    // --- Crat Tatva

    const craftTatvaDuration: WorkDuration = {
        from: "Dec 2019",
        to: "Mar 2021"
    }

    const craftTatvaImage1: WorkImage = {
        src: '/shopping.svg',
        alt: 'Team',
        height: 176,
        width: 176
    }

    const craftTatva: WorkDetails = {
        role: 'Frontend Developer',
        company: 'Craft Tatva',
        duration: craftTatvaDuration,
        images: [craftTatvaImage1],
        description: [
            "Developed and maintained the Craft Tatva marketplace website and Android app.",
            "Built responsive UI using React.js, ensuring smooth cross-device performance.",
            "Handled database operations and performed testing for stability and performance.",
        ],
        tags: ["React.js", "Android"]
    }


    return (
        <div className="flex flex-col gap-8 items-center justify-center font-mono">

            <TypingAnimation text="Work Experience" size="text-4xl"/>

            <ExperienceCard
                details={roamSde2}
            />

            <ExperienceCard
                details={roamSde1}
            />

            <ExperienceCard
                details={gypsee}
            />

            <ExperienceCard
                details={craftTatva}
            />

            <div className="h-4" />

        </div>

    );
}