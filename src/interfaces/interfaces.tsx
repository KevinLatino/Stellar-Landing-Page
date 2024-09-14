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

export interface MarqueeInterface {
    name: string,
    body: string,
    img: string
}