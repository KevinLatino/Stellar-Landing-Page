import ShimmerButton from "@/components/magicui/shimmer-button";


export default function Home() {
  return (

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
  );
}