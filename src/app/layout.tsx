import type { Metadata } from "next";
import NavBarComponent from "@/components/NavBarComponent";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stellar",
  description: "This is the landing page of Stellar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavBarComponent />
        </header>
        {children}
      </body>
    </html>
  );
}
