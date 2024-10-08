import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import "./globals.css";
import Stellar from "./favicon.ico"

export const metadata: Metadata = {
  title: "Stellar",
  description: "This is the landing page of Stellar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href={Stellar.src} />
      <body className="flex flex-col min-h-screen">
        <header id="hero" className="mb-[10rem] ">
          <NavBarComponent />
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
