import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AmbientGlow } from "@/components/AmbientGlow";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AmbientGlow />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
