
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
    capBlue = "https://github.com/user-attachments/assets/d871f8d7-c204-43e9-a07b-7dd48283cf61",
    capLightGreen = "https://github.com/user-attachments/assets/b503ebfe-6814-4560-83d9-4997a6f74ed4"
}
export interface MarqueeInterface {
    name: string,
    body: string,
    img: ImgMarquee
}