import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Collection } from "@/components/Collection";
import { Boutique } from "@/components/Boutique";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { AmbientGlow } from "@/components/AmbientGlow";

export default function Home() {
  return (
    <>
      <AmbientGlow />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Collection />
        <Boutique />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
