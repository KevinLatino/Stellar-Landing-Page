import StellarTaks from '@/assets/Tasks.png'
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import MockUp from "@/assets/macbook.svg";
import StellarCalendar from "@/assets/Calendar.png"
import Medals from "@/assets/Medals.png";
import FeatureComponent from "@/components/FeatureComponent";
import ModuleComponent from "@/components/ModuleComponent";
import ContactUs from '@/components/articles/ContactUs';
import { MarqueeDemo } from "./Marquee";

export default function Home() {

  const features = [
    {
      side: 'right',
      title: 'Clasificar tus tareas según su prioridad:',
      description: [
        'Tareas con urgencia Alta',
        'Tareas con urgencia Media',
        'Tareas con urgencia Baja',
      ],
      image: StellarTaks,
    },
    {
      side: 'left',
      title: 'Visualiza tu calendario, organizate mejor.',
      description: [
        'Puedes ver tus deberes por semana',
        'Puedes ver tus deberes de cada mes',
        'Puedes ver tus deberes de cada año',
      ],
      image: StellarCalendar,
    },
    {
      side: 'right',
      title: 'Consigue medallas, mientras aprendes',
      description: [
        'Aprende los métodos más efectivos',
        'Completa los tests mientras aprendes',
        'Gana increíbles medallas',
      ],
      image: Medals,
    },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row w-full mt-[4rem] justify-evenly items-center">
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

      <section id='modules' className="mt-[11rem] flex flex-col gap-6">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          ¡<strong className="text-light-blue">Aprende</strong> sobre los módulos más importantes para mejorar tu{" "}
          <strong className="text-light-blue">productividad</strong>!
        </h2>
        <ModuleComponent />
      </section>

      <section id='opinions' className="mt-[6rem]">
        <h2 className="text-3xl text-center font-medium text-strong-blue">
          <strong className="text-light-blue">Opiniones</strong> de estudiantes que han probado la versión beta de {" "}
          <strong className="text-light-blue">Stellar</strong>.
        </h2>
        <article>
          <MarqueeDemo />
        </article>
      </section>


      <section id='functionalities' className='mb-10'>
        <h2 className="text-3xl text-center font-medium">
          Con <strong className="text-light-blue">Stellar</strong> tienes los siguientes beneficios:
        </h2>

        {features.map((feature, index) => (
          <FeatureComponent key={index} side={feature.side} image={feature.image}>
            <h3 className="text-strong-blue font-medium text-3xl text-center">
              <strong className="text-light-blue">{feature.title.split(' ')[0]}</strong> {feature.title.split(' ').slice(1).join(' ')}
            </h3>
            <ul className="text-xl">
              {feature.description.map((desc, i) => {
                const words = desc.split(' ');
                const urgencyWord = words.pop();
                const sentence = words.join(' ');

                return (
                  <li key={i}>
                    {sentence}{' '}
                    <strong
                      className={
                        urgencyWord === "Alta"
                          ? "text-light-red"
                          : urgencyWord === "Media"
                            ? "text-light-yellow"
                            : urgencyWord === "Baja"
                              ? "text-light-green"
                              : "text-light-blue"
                      }
                    >
                      {urgencyWord}
                    </strong>
                  </li>
                );
              })}
            </ul>
          </FeatureComponent>
        ))}
      </section>

      <section id='contact' className='mt-[7rem]'>
        <h4 className='flex justify-center text-strong-blue font-medium text-[29px]'>
          <strong className='text-light-blue'>¿Quieres probar Stellar?</strong>&nbsp;Contáctanos y nosotros te ayudamos.
        </h4>
        <ContactUs />
      </section>


    </>
  );
}
