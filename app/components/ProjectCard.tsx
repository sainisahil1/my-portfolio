import Image from "next/image";
import { ProjectProps } from "./Utils";

const ProjectCard = ({ details }: { details: ProjectProps }) => {
    return (
        <div className="flex flex-col gap-10 skillcard items-center justify-center bg-white rounded-2xl p-8 w-2/3 hover:scale-[1.01] transition-transform">

            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2"></h2>
                <h2 className="text-xl font-bold">{details.title}</h2>
                <p className="text-base italic text-gray-500">{details.url}</p>
                <ul className="list-disc ml-5 mt-3 space-y-2">
                    {details.description.map((value, i) => <li key={i}>{value}</li>)}
                </ul>
            </div>


            {details.images.map((value, i) =>
                <div key={i} className="flex flex-col items-center gap-1">
                    <div className="relative">
                    <Image
                    src={value.src}
                    alt={value.alt}
                    className="w-full"
                    width={value.width}
                    height={value.height}
                    />
                    </div>
                     <p className="px-2 text-sm italic">{value.subtitle}</p>
                </div>
            )}

            <div className="flex flex-wrap gap-3 mt-4">
                {details.tags.map((value, i) => <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded-full dark:bg-gray-700">{value}</span>)}
            </div>
        </div>
    );
}

export default ProjectCard;