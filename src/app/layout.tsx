import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar",
  description: "This is the landing page of Stellar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header id="hero">
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
