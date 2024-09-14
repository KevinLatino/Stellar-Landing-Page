import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { MarqueeInterface, ImgMarquee } from "@/interfaces/interfaces";


const reviews: MarqueeInterface[] = [
  {
    name: "Santiago",
    body: "Esta app me ayudó a organizarme y mejorar mis notas. ¡Es increíble",
    img: ImgMarquee.capBlue,
  },
  {
    name: "Gabriel",
    body: "Aprendí a gestionar mis tareas sin estrés. ¡Ahora soy más productivo!",
    img: ImgMarquee.capLightGreen,
  },
  {
    name: "Kevin",
    body: "Dejé de procrastinar y empecé a priorizar lo importante. ¡Gran cambio!",
    img: ImgMarquee.capBlue,
  },
  {
    name: "Nicole",
    body: "Con esta app nunca más me pierdo una fecha importante. ¡Me encanta!",
    img: ImgMarquee.capLightGreen,
  },
  {
    name: "Sofía",
    body: "La app me ayudó a mejorar mi enfoque y ser más organizada. ¡Muy útil!",
    img: ImgMarquee.capBlue,
  },
  {
    name: "Alejandro",
    body: "Interfaz sumamente intuitiva, ¡me ayuda día a día!.",
    img: ImgMarquee.capLightGreen,
  },
  {
    name: "Steven",
    body: "Con stellar ya no tengo problemas con los plazos de entrega",
    img: ImgMarquee.capBlue
  },
  {
    name: "Sergio",
    body: "Stellar ha ayudado a mi vida estudiantil de una manera sin igual",
    img: ImgMarquee.capLightGreen 
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: MarqueeInterface) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
