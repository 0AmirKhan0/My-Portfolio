import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import GrainEffect from "@/components/visualEffects/GrainEffect";
import "./globals.css";
import Cursor from "@/components/cursor/Cursor";

const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const oswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const pixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

// MetaData
export const metadata = {
  title: "Amir Khan Portfolio",
  description: "Amir khan official portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          oswaldFont.variable,
          pixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
