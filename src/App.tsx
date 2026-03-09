import {
  Footer,
  Header,
  Pricing01,
  Pricing02,
  Services,
  Team,
} from "@/components/blocks";
import AboutAndStats01 from "@/components/blocks/about-us-01";
import AgencyHeroSection from "@/components/blocks/hero-01";
import TestimonialPage from "@/components/blocks/testimonial-01/testimonial";
import { navigationData } from "@/data/navigation-data";

export function App() {
  return (
    <>
      <Header navigationData={navigationData} />
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Team />
      <TestimonialPage />
      <Services />
      <Pricing01 />
      <Pricing02 />
      <Footer />
    </>
  );
}

export default App;
