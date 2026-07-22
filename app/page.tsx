import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Collection } from "@/components/Collection";
import { Boutique } from "@/components/Boutique";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Collection />
        <Boutique />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
