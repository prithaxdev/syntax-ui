import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";

type PricingPlan = {
  plan_bg_color: string;
  plan_name: string;
  plan_descp: string;
  plan_price: number;
  plan_feature: string[];
};

const pricingData: PricingPlan[] = [
  {
    plan_bg_color: "bg-blue-500/10",
    plan_name: "Starter",
    plan_descp: "For companies who need design support. One request at a time",
    plan_price: 2500,
    plan_feature: [
      "Design Updates",
      "Mid-level Designer",
      "SEO Optimization",
      "Monthly Analytics",
      "2x Calls Per Month",
      "License free Assets",
    ],
  },
  {
    plan_bg_color: "bg-teal-400/20",
    plan_name: "Pro",
    plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
    plan_price: 3800,
    plan_feature: [
      "Everything on Starter",
      "Developer Updates",
      "Digital Marketing",
      "Weekly Analytics",
      "8x Calls Per Month",
      "Premium Assets",
    ],
  },
];

const Pricing = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };
  return (
    <section id="pricingv1" className="py-10 xl:py-0">
      <div className="mx-auto max-w-360 px-4 py-8 sm:py-16 lg:px-8 lg:py-20 xl:px-16">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:gap-12">
          {/*Heading*/}
          <div className="animate-in fade-in slide-in-from-top-8 flex flex-col items-center justify-center gap-4 duration-700 ease-in-out">
            {/*Badge*/}
            <Badge
              variant="outline"
              className="h-7 w-fit px-3 py-1 text-sm leading-5 font-normal"
            >
              Pricing V1
            </Badge>
            <div className="mx-auto max-w-3xs text-center sm:max-w-md">
              <h2 className="text-foreground text-3xl font-medium sm:text-5xl">
                Pick the plan that fits your start-up
              </h2>
            </div>
          </div>
          {/*Pricing Plans*/}
          <div className="flex w-full grow flex-col items-center justify-center gap-6 lg:flex-row">
            {pricingData?.map((items: PricingPlan, index: number) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="w-full sm:w-fit"
              >
                <Card
                  className={cn(
                    items.plan_bg_color,
                    "w-full rounded-xl p-8 ring-0 sm:w-fit sm:p-10",
                  )}
                  key={index}
                >
                  <CardContent className="flex h-full w-full flex-col items-start gap-6 self-stretch px-0 sm:flex-row md:gap-10">
                    <div className="flex flex-col items-start justify-center gap-6 self-stretch">
                      <div className="flex flex-col gap-3">
                        <Badge className="h-7 w-fit px-3 py-1 text-sm leading-5 font-normal">
                          {items.plan_name}
                        </Badge>
                        <p className="text-muted-foreground max-w-65 text-sm font-normal">
                          {items.plan_descp}
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="text-card-foreground flex items-end text-4xl font-semibold sm:text-5xl">
                          ${items.plan_price}
                          <span className="text-muted-foreground text-base font-normal">
                            /month
                          </span>
                        </p>
                        <Button className="group overflow-hiddenc relative h-12 w-fit cursor-pointer rounded-full bg-white p-1 ps-6 pe-14 text-sm font-medium text-black transition-all duration-500 hover:bg-white hover:ps-14 hover:text-black dark:hover:text-black">
                          <span className="relative z-10 transition-all duration-500">
                            Let's Collaborate
                          </span>
                          <div className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Separator
                      orientation="vertical"
                      className="hidden sm:block"
                    />
                    <Separator
                      orientation="horizontal"
                      className="block sm:hidden"
                    />
                    <div className="flex grow flex-col items-start gap-3">
                      <p className="text-card-foreground text-base font-normal sm:text-xl sm:font-medium">
                        Features
                      </p>
                      <ul className="flex flex-col items-start gap-3 self-stretch">
                        {items.plan_feature?.map(
                          (feature: string, index: number) => {
                            return (
                              <li
                                key={index}
                                className="text-card-foreground flex items-center gap-3 text-base font-normal tracking-normal"
                              >
                                <Check size={16} aria-hidden="true" />
                                {feature}
                              </li>
                            );
                          },
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
