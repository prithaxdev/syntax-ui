import AgencyHeroSection from "./components/blocks/hero-01";
import PricingV1 from "./components/blocks/pricing-01/pricing";
import PricingV2 from "./components/blocks/pricing-02/pricing";
import Team from "./components/blocks/team-01/team";

export function App() {
  return (
    <>
      <AgencyHeroSection />
      <Team />
      <PricingV1 />
      <PricingV2 />
    </>
  );
}

export default App;
