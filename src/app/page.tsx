import ShimmerButton from "@/components/magicui/shimmer-button";
import "@/assets/styles/features.css";
import Image from "next/image";
import Resource from "../assets/resource.png";
import { CheckCircle } from "lucide-react"

export default function Home() {
  const features = [
    {
      title: "Calendario",
      description: "",
    },
    {
      title: "Plantea tus metas",
      description: "",
    },
    {
      title: "Establece fechas claras",
      description: "",
    },
    {
      title: "Aprende técnicas de productividad",
      description: "",
    },
  ]

  const modules = [
    {
      title: "La matriz de Eisenhower",
      description: "Clasificar las tareas según su urgencia o importancia"
    },
    {
      title: "Técnica Pomodoro",
      description: "Trabajar durante intervalos de tiempo concentrado seguidos de breves descansos."
    },
    {
      title: "Prácticas de Mindfulness",
      description: "Organizar las tareas pendientes en listas de acuerdo a su naturaleza."
    },
    {
      title: "Establecimiento de metas claras",
      description: "Establecer metas claras de manera diaria es fundamental para mantener la motivación."
    },
  ]
  return (
    <>
    <div className="flex w-full mt-24 justify-evenly">
      <div className="flex w-[40%] flex-col gap-7">
        <h1 className="text-strong-blue font-medium text-3xl text-center">
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
      <div className="flex w-[50%]">
        {/* future computer */}
      </div>
    </div>
    <section className="features flex w-full pt-40 lg:pt-56 2xl:pt-96 ">
        <article className="flex flex-col gap-4 justify-center w-1/2 h-1/2 pl-4 pt-48 text-white">
          <h2 className="text-5xl">
            Organiza tus días de la mejor manera
          </h2>
          <ul className="flex flex-col justify-center">
            {
              features.map((feature, index) => (
                <li key={index} className="flex pl-20 items-center gap-2">
                  <CheckCircle size={40} />
                  <p className="text-xl lg:text-2xl">{feature.title}</p >
                </li>
              ))
            }
          </ul>
        </article>
        <div className="flex w-1/2 h-1/2 mb-96">
          <img src={Resource.src} alt="" />
        </div>
    </section>
    <section className="p-20">
      <h2 className="text-4xl">
        <span className="font-bold">Aprende</span> sobre los módulos más importantes para mejorar tu productividad.
      </h2>
    </section>
    </>

  );
}