import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/GrainEffect";

const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const oswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const pixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-pixel",
});

export const metadata = {
  title: "Amir Khan",
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
        {children}
      </body>
    </html>
  );
}
