import {
  CTA,
  Footer,
  Header,
  Pricing01,
  Pricing02,
  Services01,
  Services02,
  Team,
} from "@/components/blocks";
import AboutAndStats01 from "@/components/blocks/about-us-01";
import AgencyHeroSection from "@/components/blocks/hero-01";
import { navigationData } from "@/data/navigation-data";
import TestimonialPage from "./components/blocks/testimonial-01/testimonial";
import TestimonialMarquee from "./components/blocks/testimonials-02/testimonial";

export function App() {
  return (
    <>
      <Header navigationData={navigationData} />
      <AgencyHeroSection />
      <AboutAndStats01 />
      <CTA />
      <Team />
      <TestimonialPage />
      <TestimonialMarquee />
      <Services01 />
      <Services02 />
      <Pricing01 />
      <Pricing02 />
      <Footer />
    </>
  );
}

export default App;
