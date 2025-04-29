import { FaAndroid, FaCss3, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAmazonwebservices, SiDart, SiExpress, SiFirebase, SiInfluxdb, SiJavascript, SiKotlin, SiMongodb, SiMysql, SiNextdotjs, SiProxmox, SiRedis, SiSpringboot, SiSqlite, SiTailwindcss, SiTypescript } from "react-icons/si";
import TypingAnimation from "../components/TypingAnimation";
import { FaFlutter } from "react-icons/fa6";

export default function TechStack() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-mono p-8">
            
            <TypingAnimation text="Tech Stack"/>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-10 text-center">

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Mobile</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaAndroid/> Android
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaReact/> React Native
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaFlutter/> Flutter
                </li>
              </ul>
            </div>

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Frontend</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiNextdotjs/> Next.js
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaReact/> React.js
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiTailwindcss/> Tailwind CSS
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaCss3/> CSS3
                </li>
              </ul>
            </div>

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Backend</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiSpringboot/> Spring Boot
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiExpress/> Express.js
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaNodeJs/> Node.js
                </li>
              </ul>
            </div>

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Databases</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiMysql/> MySQL
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiMongodb/> MongoDB
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiRedis/> Redis
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiInfluxdb/> InfluxDB
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiSqlite/> SQLite
                </li>
              </ul>
            </div>

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Languages</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <FaJava/> Java
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiKotlin/> Kotlin
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiJavascript/> Javascript
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiTypescript/> Typescript
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiDart/> Dart
                </li>
              </ul>
            </div>

            <div className="bg-white skillcard dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                <h2 className="text-2xl font-semibold mx-2 my-1">Cloud</h2>
              </span>
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiAmazonwebservices/> AWS
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiFirebase/> Firebase
                </li>
                <li className="flex flex-row justify-center items-center gap-2">
                    <SiProxmox/> Proxmox
                </li>
              </ul>
            </div>

            </div>

        </div>
    );
}