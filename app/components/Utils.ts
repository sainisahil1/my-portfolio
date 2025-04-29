import { IconType } from "react-icons";

export interface WorkDetails {
    role: string;
    company: string;
    duration: WorkDuration;
    description: string[];
    images: WorkImage[];
    tags: string[];
}

export interface WorkDuration {
    from: string;
    to: string;
}

export interface WorkImage {
    src: string;
    alt: string;
    height: number;
    width: number;
}

export interface SkillItem {
    Icon: IconType;
    name: string
}