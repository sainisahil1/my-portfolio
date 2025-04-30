import { SkillItem } from "./Utils";

const TechStackCard = ({items, heading}: {items: SkillItem[], heading: string}) => {
    return(
        <div className="bg-white skillcard shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
                      <span className="inline-block tech-stack-heading text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        <h2 className="text-2xl font-semibold mx-2 my-1">{heading}</h2>
                      </span>
                      <ul className="flex flex-col items-center justify-center space-y-3">
                        {items.map((value, i) => 
                            <li key={i} className="flex flex-row justify-center items-center gap-2">
                                <value.Icon /> {value.name}
                            </li>
                        )}
                      </ul>
                    </div>
    );
}

export default TechStackCard;