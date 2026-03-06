import { Target, WandSparkles, Zap } from "lucide-react";
import AboutUs from "./about-us";

const aboutusData = [
  {
    icon: WandSparkles,
    title: "Creativity",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Zap,
    title: "Innovation",
    color: "bg-teal-400/10 text-teal-400",
  },
  {
    icon: Target,
    title: "Strategy",
    color: "bg-orange-400/10 text-orange-400",
  },
];

const statisticsCounter = [
  {
    title: "Total Projects Completed",
    count: 40,
  },
  {
    title: "Years of Experience",
    count: 15,
  },
  {
    title: "Design Awards",
    count: 12,
  },
];

const AboutAndStats01 = () => {
  return (
    <div id="aboutus">
      <AboutUs
        aboutusData={aboutusData}
        statisticsCounter={statisticsCounter}
      />
    </div>
  );
};

export default AboutAndStats01;
