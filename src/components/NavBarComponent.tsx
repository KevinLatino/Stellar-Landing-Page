"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import StellarLogo from "@/assets/Stellar-NavBar.svg";

export default function NavBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems: string[] = ["Features", "Planes", "Nosotros"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 relative">
      <Image
        src={StellarLogo}
        alt="Stellar Logo"
        width={290}
        height={40}
        className="p-4 cursor-pointer"
      />

      {/* Hamburger Menu Button */}
      <button
        className="block lg:hidden p-4 cursor-pointer z-20 transition-transform duration-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X className="transition-transform duration-300 ease-in-out transform rotate-90" size={28} />
        ) : (
          <Menu className="transition-transform duration-300 ease-in-out" size={28} />
        )}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 p-4">
        {navBarItems.map((item: string, index: number) => (
          <li
            key={index}
            className="text-strong-blue font-raleway text-[20px] font-medium cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Full-Screen Mobile Menu - Slide from Right */}
      <ul
        className={`fixed top-0 right-0 h-full w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg lg:hidden z-10 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navBarItems.map((item: string, index: number) => (
          <li
            key={index}
            className="text-strong-blue font-raleway text-[18px] font-medium cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
