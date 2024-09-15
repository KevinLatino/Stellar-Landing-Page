import { ModuleInterface, ModuleColor } from "@/interfaces/interfaces";
import StellarTaks from '@/assets/Tasks.png'
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { MarqueeDemo } from "./Marquee";
import TerminalComponent from "@/components/TerminalComponent";
import MockUp from "@/assets/macbook.svg";
import StellarCalendar from "@/assets/Calendar.png"
import Medals from "@/assets/Medals.png"
import ModuleComponent from "@/components/ModuleComponent";
import StellarResource from '@/assets/Stellar-Resource.svg'

export default function Home() {


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
        <ModuleComponent />
      </section>

      <section className="mt-[6rem]">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          <strong className="text-light-blue">Opiniones</strong> de estudiantes que han probado la versión beta de {" "}
          <strong className="text-light-blue">Stellar</strong>.
        </h2>
        <article>
          <MarqueeDemo />
        </article>
      </section>

      <h2 className="text-3xl text-center mb-10 font-medium">
        Con <strong className="text-light-blue">Stellar</strong> tienes los siguientes beneficios:
      </h2>

      <section className="flex flex-col md:flex-row w-full justify-between items-center md:px-32 p-3 mt-10">
        <div className="flex flex-col gap-4">
          <text className="text-strong-blue  font-medium text-3xl text-center">
            <strong className="text-light-blue">Clasificar</strong> tus
            tareas según su prioridad:
          </text>
          <ul className="text-xl font-medium">
            <li>Tareas con urgencia <strong className="text-light-red">Alta</strong></li>
            <li>Tareas con urgencia <strong className="text-light-yellow">Media</strong></li>
            <li>Tareas con urgencia <strong className="text-light-green">Baja</strong></li>
          </ul>
        </div>
        <div className="flex w-[50%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={StellarTaks}
              draggable={false}
              alt="Stellar Tasks"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full justify-between items-center lg:px-32 p-3 mt-10">
        <div className="hidden md:flex w-[50%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={StellarCalendar}
              draggable={false}
              alt="Stellar Calendar"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
        <div className="flex flex-col gap-4">
          <text className="text-strong-blue  font-medium text-3xl text-center">
            <strong className="text-light-blue">Organizar</strong> tus
            semanas, según las tareas
          </text>
          <ul className="text-xl font-medium">
            <li>Tareas con urgencia <strong className="text-light-red">Alta</strong></li>
            <li>Tareas con urgencia <strong className="text-light-yellow">Media</strong></li>
            <li>Tareas con urgencia <strong className="text-light-green">Baja</strong></li>
          </ul>
        </div>
        <div className="flex md:hidden w-[40%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={StellarCalendar}
              draggable={false}
              alt="Stellar Calendar"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full justify-between items-center px-3 md:px-32 p-3 mt-10">
        <div className="flex flex-col gap-4">
          <text className="text-strong-blue  font-medium text-3xl text-center">
            <strong className="text-light-blue">Obtener </strong>
            medallas, con progreso
          </text>
          <ul className="text-xl font-medium">
            <li>Tareas con <strong className="text-light-red">urgencia Alta</strong></li>
            <li>Tareas con <strong className="text-light-yellow">urgencia Media</strong></li>
            <li>Tareas con  <strong className="text-light-green">urgencia Baja</strong></li>
          </ul>
        </div>
        <div className="flex w-[50%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={Medals}
              draggable={false}
              alt="Stellar Tasks"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
      </section>
    </>
  );
}
