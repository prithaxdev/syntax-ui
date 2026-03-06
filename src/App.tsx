import AboutAndStats01 from "./components/blocks/about-us-01";
import AgencyHeroSection from "./components/blocks/hero-01";
import PricingV1 from "./components/blocks/pricing-01/pricing";
import PricingV2 from "./components/blocks/pricing-02/pricing";
import Team from "./components/blocks/team-01/team";

export function App() {
  return (
    <>
      <AgencyHeroSection />
      <AboutAndStats01 />
      <Team />
      <PricingV1 />
      <PricingV2 />
    </>
  );
}

export default App;
