import { StaticImageData } from "next/image";

export enum ModuleColor {
    yellow = "border-yellow-500",
    green = "border-green-500",
    blue = "border-blue-500",
    purple = "border-purple-500"
}

export interface ModuleInterface {
    title: string,
    description: string,
    borderColor: ModuleColor
}


export enum ImgMarquee {
    male = "https://github.com/user-attachments/assets/00c5f17e-17f8-42a3-8e24-4783125216bb",
    female = "https://github.com/user-attachments/assets/931ae195-52e4-42bd-90cf-99018b37034e"
}

export interface MarqueeInterface {
    name: string,
    body: string,
    img: ImgMarquee
}

export interface FeatureProps {
    side: string;
    children: React.ReactNode;
    image: StaticImageData;
  }