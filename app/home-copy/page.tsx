import type { Metadata } from "next";
import Applications from "@/components/sections/home/applications";
import Hero from "@/components/sections/home/hero";
import Services from "@/components/sections/home/services";
import WhyTestWatt from "@/components/sections/home/why-test-watt";

export const metadata: Metadata = {
  title: "Home (font copy) | TestWatt",
  robots: "noindex,nofollow",
};

export default function HomeCopyPage() {
  return (
    <div>
      <Hero />
      <Services />
      <Applications />
      <WhyTestWatt />
    </div>
  );
}
