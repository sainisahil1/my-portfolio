import { FaAndroid, FaCss3, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAmazonwebservices, SiDart, SiExpress, SiFirebase, SiInfluxdb, SiJavascript, SiKotlin, SiMongodb, SiMysql, SiNextdotjs, SiProxmox, SiRedis, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";
import TypingAnimation from "../components/TypingAnimation";
import { FaFlutter } from "react-icons/fa6";
import TechStackCard from "../components/TechStackCard";
import { SkillItem } from "../components/Utils";

export default function TechStack() {

  const mobileStack: SkillItem[] = [
    {
      Icon: FaAndroid,
      name: "Android"
    },
    {
      Icon: FaReact,
      name: "React Native"
    },
    {
      Icon: FaFlutter,
      name: "Flutter"
    },
  ];

  const frontendStack: SkillItem[] = [
    {
      Icon: SiNextdotjs,
      name: "Next.js"
    },
    {
      Icon: FaReact,
      name: "React.js"
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind CSS"
    },
    {
      Icon: FaCss3,
      name: "CSS 3"
    },
  ];

  const backendStack: SkillItem[] = [
    {
      Icon: SiSpringboot,
      name: "Spring Boot"
    },
    {
      Icon: SiExpress,
      name: "Express.js"
    },
    {
      Icon: FaNodeJs,
      name: "Node.js"
    },
  ];

  const databaseStack: SkillItem[] = [
    {
      Icon: SiMysql,
      name: "MySQL"
    },
    {
      Icon: SiMongodb,
      name: "MongoDB"
    },
    {
      Icon: SiRedis,
      name: "Redis"
    },
    {
      Icon: SiInfluxdb,
      name: "InfluxDB"
    },
    {
      Icon: SiSqlite,
      name: "SQLite"
    },
  ];

  const languageStack: SkillItem[] = [
    {
      Icon: FaJava,
      name: "Java"
    },
    {
      Icon: SiKotlin,
      name: "Kotlin"
    },
    {
      Icon: SiJavascript,
      name: "JavaScript"
    },
    {
      Icon: SiTypescript,
      name: "TypeScript"
    },
    {
      Icon: SiDart,
      name: "Dart"
    },
  ];

  const cloudStack: SkillItem[] = [
    {
      Icon: SiAmazonwebservices,
      name: "AWS"
    },
    {
      Icon: SiProxmox,
      name: "Proxmox"
    },
    {
      Icon: SiFirebase,
      name: "Firebase"
    },
  ];




  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono p-8">

      <TypingAnimation text="Tech Stack" size="text-2xl md:text-4xl"/>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10 text-center">

        <TechStackCard
          items={mobileStack}
          heading="Mobile"
        />

        <TechStackCard
          items={frontendStack}
          heading="Frontend"
        />

        <TechStackCard
          items={backendStack}
          heading="Backend"
        />

        <TechStackCard
          items={databaseStack}
          heading="Databases"
        />

        <TechStackCard
          items={languageStack}
          heading="Languages"
        />

        <TechStackCard
          items={cloudStack}
          heading="Cloud"
        />

      </div>

    </div>
  );
}