import { Hero } from "@/components/sections/hero";
import { Download } from "@/components/sections/download";
import { Features } from "@/components/sections/features";
import { Screenshots } from "@/components/sections/screenshots";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Download />
      <Features />
      <Screenshots />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
