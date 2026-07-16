import { Hero } from "@/components/hero";
import { ProductsSection } from "@/components/products-section";
import { AboutSection } from "@/components/about-section";
import { TechnologySection } from "@/components/technology-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <AboutSection />
      <TechnologySection />
      <ContactSection />
    </>
  );
}
