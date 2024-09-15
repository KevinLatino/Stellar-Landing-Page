import { ModuleInterface, ModuleProps } from "@/interfaces/interfaces";
import { ModuleColor } from "@/interfaces/interfaces";

const modules: ModuleInterface[] = [
    {
        title: "La matriz de Eisenhower",
        description: "Es un método importante debido a que te enseña a clasificar las tareas según su urgencia e importancia.",
        borderColor: ModuleColor.yellow,
    },
    {
        title: "Técnica Pomodoro",
        description:
            "Esta técnica nos dice que podemos trabajar durante intervalos de tiempo concentrados, y luego tomar breves descansos.",
        borderColor: ModuleColor.green,
    },
    {
        title: "Prácticas de Mindfulness",
        description:
            "Nos ayuda a incorporar técnicas de mindfulness para mejorar el enfoque y reducir el estrés.",
        borderColor: ModuleColor.blue,
    },
    {
        title: "Establecimiento de metas claras",
        description:
            "Nos enseña que establecer metas claras de manera diaria es fundamental para mantener la motivación.",
        borderColor: ModuleColor.purple,
    },
];

export default function ModuleComponent() {
    return (
        <ul className="flex flex-wrap gap-x-20 gap-y-14 mt-10 justify-center">
            {modules.map((module, index) => (
                <Module key={index} module={module} />
            ))}
        </ul>
    )
}

function Module({ module }:ModuleProps){
    return(
        <li
        className={` border-l-4  pl-4 max-w-xl ${module.borderColor}`}
    >
        <h3 className="text-xl text-strong-blue font-semibold">
            {module.title}
        </h3>
        <p className="text-[17px] mt-1 text-gray-600">
            {module.description}
        </p>
    </li>
    )
}