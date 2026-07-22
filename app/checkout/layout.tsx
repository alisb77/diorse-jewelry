import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AmbientGlow } from "@/components/AmbientGlow";

export default function CheckoutLayout({
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
