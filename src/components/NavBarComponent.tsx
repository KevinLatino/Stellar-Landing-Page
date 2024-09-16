"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import StellarLogo from '@/assets/Stellar-NavBar.svg';
import { NavBarInterface } from '@/interfaces/interfaces';
import Link from "next/link";

const navItems: NavBarInterface[] = [
  { title: "Módulos", url: "#modules" },
  { title: "Opiniones", url: "#opinions" },
  { title: "Funcionalidades", url: "#functionalities" },
  { title: "Contacto", url: "#contact" },
];

const NavBarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.6, // 60% of the section is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    // Cleanup the observer on component unmount
    return () => observer.disconnect();
  }, []);

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
          onClick={() => window.location.href = "/#"}
        />

        <div className={`flex transition-all duration-200 ${isScrolled ? "text-[16.5px]" : "text-lg"}`}>
          {navItems.map(({ title, url }: NavBarInterface) => (
            <Link
              key={title}
              className={`relative block px-2 py-2 ${activeSection === url ? "text-blue-500" : "text-gray-600"} 
                hover:text-blue-500 transition-all`}
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
