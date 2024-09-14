import React from "react";
import TerminalComponent from "./TerminalComponent";
import Image from "next/image";

interface FeatureProps {
  side: string;
  children: React.ReactNode;
  image: string;
}

export default function FeatureComponent({
  side,
  children,
  image,
}: FeatureProps) {
  return (
    <section className="flex flex-col md:flex-row w-full justify-between items-center md:px-32 p-3 mt-10">
      {side === "left" ? (
        <div className="hidden md:flex w-[50%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={image}
              draggable={false}
              alt="Stellar Tasks"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
      ) : null}

      <div className="flex flex-col gap-4">{children}</div>

      {side === "right" ? (
        <div className="hidden md:flex w-[50%] flex-col gap-7">
          <TerminalComponent>
            <Image
              src={image}
              draggable={false}
              alt="Stellar Tasks"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </TerminalComponent>
        </div>
      ) : null}

      <div className="flex md:hidden w-[40%] flex-col gap-7">
        <TerminalComponent>
          <Image
            src={image}
            draggable={false}
            alt="Stellar Tasks"
            width={800}
            height={400}
            className="rounded-xl"
          />
        </TerminalComponent>
      </div>
    </section>
  );
}
