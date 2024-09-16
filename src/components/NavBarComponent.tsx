"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import StellarLogo from "@/assets/Stellar-NavBar.svg";
import { NavBarInterface } from "@/interfaces/interfaces";
import Link from "next/link";

const navItems: NavBarInterface[] = [
  { title: "Módulos", url: "#modules" },
  { title: "Opiniones", url: "#opinions" },
  { title: "Funcionalidades", url: "#functionalities" },
  { title: "Contacto", url: "latinkevin9@gmail.com" },
];

const NavBarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
  
      const sections = ["modules", "opinions", "functionalities"];
      const offset = 400; 
  
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - offset && rect.bottom >= offset;
  
          if (isVisible) {
            setActiveSection(section);
          }
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  ;

  return (
    <header className={`fixed top-0 z-10 w-full mx-auto ${isScrolled ? "mt-2" : "mt-8"}`}>
      <nav
        className={`flex items-center justify-center ${isScrolled ? "gap-[1rem]" : "gap-[42rem]"} text-[16px] font-medium rounded-full 
          ${isScrolled ? "text-gray-600 dark:text-gray-200 bg-white/50 shadow-lg ring-1 backdrop-blur ring-white/10" : ""}
          max-w-xl mx-auto`}
      >
        <Image
          src={StellarLogo}
          alt="Logo"
          className={`cursor-pointer transition-all duration-200 ${isScrolled ? "h-[3rem] w-auto" : "h-[5rem] w-auto"}`}
          onClick={() => (window.location.href = "/#")}
        />

        <div className={`flex transition-all duration-200 ${isScrolled ? "text-[16.5px]" : "text-lg"}`}>
          {navItems.map(({ title, url }: NavBarInterface) => (
            <Link
              key={title}
              className={`relative hover:text-blue-500 block px-2 py-2 ${
                activeSection === url.slice(1) ? "text-blue-500" : "text-gray-600"
              }`}
              href={url}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBarComponent;
