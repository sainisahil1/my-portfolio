import Image from "next/image";
import { WorkDetails } from "./Utils";

const ExperienceCard = ({details}: {details: WorkDetails}) => {
    return(
        <div className="flex flex-col md:flex-row gap-20 skillcard items-center bg-white rounded-2xl p-8 w-4/5 md:w-2/3 hover:scale-[1.01] transition-transform">

              {/* Left Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2"></h2>
                <h2 className="text-base md:text-xl font-bold">{details.role}</h2>
                <p className="text-base italic text-gray-500">{details.company} · {details.duration.from} – {details.duration.to}</p>
                <ul className="list-disc ml-5 mt-3 space-y-2">
                    {details.description.map((value, i) => <li className="text-base md:text-xl" key={i}>{value}</li>)}
                </ul>
                <div className="flex flex-wrap gap-3 mt-4">
                    {details.tags.map((value, i) => <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded-full dark:bg-gray-700">{value}</span>)}
                </div>
              </div>

              {/* Right Image/Illustration */}
              <div className="flex flex-col gap-10 items-center justify-evenly">
                {details.images.map((value, i) => 
                <Image 
                key={i}
                src={value.src}
                alt={value.alt}
                height={value.height}
                width={value.width}
                />
                )}
              </div>
            </div>
    );
}

export default ExperienceCard