import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { Features } from "@/components/Features";
import { Projects } from "@/components/Projects";
import { Calculator } from "@/components/Calculator";
import { PropertyFinder } from "@/components/PropertyFinder";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <SiteLayout transparentNav>
      <Hero />
      <Services />
      <AboutSection />
      <Features />
      <Projects />
      <Calculator />
      <PropertyFinder />
      <Testimonials />
      <BlogPreview />
      <ConsultationForm />
      <FAQ />
    </SiteLayout>
  );
}
