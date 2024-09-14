import { ModuleInterface, ModuleColor } from "@/interfaces/interfaces";
import StellarTaks from '@/assets/Tasks.png'
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { MarqueeDemo } from "./Marquee";
import MockUp from "../assets/macbook.svg";
import TerminalComponent from "@/components/TerminalComponent";

export default function Home() {

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

  return (
    <>
      <section className="flex flex-col md:flex-row w-full mt-18 justify-evenly items-center">
        <div className="flex w-[40%] flex-col gap-7">
          <h1 className="text-strong-blue  font-medium text-3xl text-center">
            Con <strong className="text-light-blue">Stellar</strong> ¡Nunca
            había sido tan sencillo que los estudiantes controlen su{" "}
            <strong className="text-light-blue">productividad</strong>!
          </h1>

          <div className="flex items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                ¡Empieza ya mismo!
              </span>
            </ShimmerButton>
          </div>
        </div>
        <div className="flex animate-float">
          <Image draggable={false} src={MockUp} alt="GitHub Logo" width={520} height={200} />
        </div>
      </section>

      <section className="mt-[6rem] flex flex-col gap-6">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          ¡<strong className="text-light-blue">Aprende</strong> sobre los módulos más importantes para mejorar tu{" "}
          <strong className="text-light-blue">productividad</strong>!
        </h2>
        <ul className="flex flex-wrap gap-x-20 gap-y-14 mt-10 justify-center">
          {modules.map((module, index) => (
            <li
              key={index}
              className={` border-l-4  pl-4 max-w-xl ${module.borderColor}`}
            >
              <h3 className="text-xl text-strong-blue font-semibold">
                {module.title}
              </h3>
              <p className="text-[17px] mt-1 text-gray-600">
                {module.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-[6rem]">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          <strong className="text-light-blue">Opiniones</strong> de estudiantes que han probado la versión beta de {" "}
          <strong className="text-light-blue">Stellar.</strong>
        </h2>
        <article>
          <MarqueeDemo />
        </article>
      </section>

      <h2 className="text-5xl text-center mb-10">
        Con           <strong className="text-light-blue">Stellar</strong> puedes :
      </h2>

      <section className="flex flex-col md:flex-row w-full justify-between items-center md:px-40">
      <div className="flex flex-col gap-4">
          <text className="text-strong-blue  font-medium text-3xl text-center">
            <strong className="text-light-blue">Clasifica</strong> tus
            tareas según su prioridad:
          </text>
            <ul className="text-xl font-medium">
              <li>Tareas con urgencia <strong className="text-light-red">Alta</strong></li>
              <li>Tareas con urgencia <strong className="text-light-yellow">Media</strong></li>
              <li>Tareas con urgencia <strong className="text-light-green">Baja</strong></li>
            </ul>
        </div>
        <div className="flex w-[40%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={StellarTaks}
              draggable={false}
              alt="Stellar Tasks"
              width={520}
              height={200}
            />
          </TerminalComponent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full justify-between items-center md:px-40">
      <div className="flex w-[40%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={StellarTaks}
              draggable={false}
              alt="Stellar Tasks"
              width={520}
              height={200}
            />
          </TerminalComponent>
        </div>
      <div className="flex flex-col gap-4">
          <text className="text-strong-blue  font-medium text-3xl text-center">
            <strong className="text-light-blue">Clasifica</strong> tus
            tareas según su prioridad:
          </text>
            <ul className="text-xl font-medium">
              <li>Tareas con urgencia <strong className="text-light-red">Alta</strong></li>
              <li>Tareas con urgencia <strong className="text-light-yellow">Media</strong></li>
              <li>Tareas con urgencia <strong className="text-light-green">Baja</strong></li>
            </ul>
        </div>
      </section>
    </>
  );
}
