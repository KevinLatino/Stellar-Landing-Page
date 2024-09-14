import { ModuleInterface, ModuleColor } from '@/interfaces/interfaces'
import StellarResource from '@/assets/Background4.svg'
import Image from 'next/image';
import ShimmerButton from "@/components/magicui/shimmer-button";
import "@/assets/styles/features.css";

export default function Home() {

  const modules: ModuleInterface[] = [
    {
      title: "La matriz de Eisenhower",
      description: "Es un método importante debido a que te enseña a clasificar las tareas según su urgencia e importancia.",
      borderColor: ModuleColor.yellow
    },
    {
      title: "Técnica Pomodoro",
      description: "Esta técnica nos dice que podemos trabajar durante intervalos de tiempo concentrados, y luego tomar breves descansos.",
      borderColor: ModuleColor.green
    },
    {
      title: "Prácticas de Mindfulness",
      description: "Nos ayuda a incorporar técnicas de mindfulness para mejorar el enfoque y reducir el estrés.",
      borderColor: ModuleColor.blue
    },
    {
      title: "Establecimiento de metas claras",
      description: "Nos enseña que establecer metas claras de manera diaria es fundamental para mantener la motivación.",
      borderColor: ModuleColor.purple
    },
  ];


  return (
    <>
      <div className="flex w-full mt-18 justify-evenly items-center">
        <div className="flex w-[40%] flex-col gap-7">
          <h1 className="text-strong-blue  font-medium text-3xl text-center">
            Con <strong className="text-light-blue">Stellar</strong> ¡Nunca
            había sido tan sencillo que los estudiantes controlen
            su <strong className="text-light-blue">productividad</strong>!
          </h1>

          <div className="flex items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                ¡Empieza ya mismo!
              </span>
            </ShimmerButton>
          </div>

        </div>
        <div className="flex ">
          <Image
            src={StellarResource}
            alt="GitHub Logo"
            width={570}
            height={200}
          />
        </div>
      </div>

      <section className="mt-[6rem] flex flex-col gap-6">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          Aprende sobre los módulos más importantes para mejorar tu <strong className="text-light-blue">productividad.</strong>
        </h2>
        <ul className="flex flex-wrap gap-x-20 gap-y-14 mt-10 justify-center">
          {modules.map((module, index) => (
            <li
              key={index}
              className={`border-l-4  pl-4 max-w-xl ${module.borderColor}`}
            >
              <h3 className="text-xl text-strong-blue font-semibold">{module.title}</h3>
              <p className="text-[17px] mt-1 text-gray-600">{module.description}</p>
            </li>
          ))}
        </ul>


      </section>
    </>

  );
}