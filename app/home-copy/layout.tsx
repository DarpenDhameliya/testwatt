import { Oswald, Work_Sans } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

/** Copy of the home page that uses Oswald for headings and Work Sans for body text. */
export default function HomeCopyLayout({ children }: { children: React.ReactNode }) {
  return <div className={`font-alt ${oswald.variable} ${workSans.variable}`}>{children}</div>;
}
