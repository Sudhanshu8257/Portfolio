import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const monster = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Sudhanshu Lohana",
  description: "Portfolio",
  icons: {
    icon: "/assets/SL.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${monster.className} ${pacifico.variable} custom-scrollbar scroll-smooth`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
