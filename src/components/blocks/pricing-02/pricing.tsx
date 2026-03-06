import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "motion/react";

type PricingPlan = {
  plan_name: string;
  plan_descp: string;
  plan_price: number;
  plan_feature: string[];
  plan_recommended: boolean;
};

const pricingData: PricingPlan[] = [
  {
    plan_name: "Pro",
    plan_descp:
      "Launch your website faster with ready-to-use components, blocks and zero setup friction with us.",
    plan_price: 2500,
    plan_feature: [
      "Access to all core Shadcn UI blocks",
      "Copy-paste ready React code",
      "Regular library updates",
      "Commercial use license",
      "Community support & documentation",
    ],
    plan_recommended: false,
  },
  {
    plan_name: "Pro Plus",
    plan_descp:
      "Scale with confidence using premium blocks, templates, and included strategy guidance.",
    plan_price: 3800,
    plan_feature: [
      "Everything in Pro",
      "Premium templates & more sections",
      "Early access to new components",
      "Private Discord & priority support",
      "Monthly strategy & growth sessions",
    ],
    plan_recommended: true,
  },
  {
    plan_name: "Enterprise",
    plan_descp:
      "Build at scale with full access, priority support, and dedicated one-on-one strategy calls.",
    plan_price: 5000,
    plan_feature: [
      "Everything in Pro Plus",
      "Unlimited team seats",
      "Dedicated UI & integration support",
      "Custom component requests",
      "One-on-one implementation",
    ],
    plan_recommended: false,
  },
];

const Pricing = () => {
  const pricingCardVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.25,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section id="pricingv2" className="py-10 lg:py-0">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex w-full flex-col items-center justify-center gap-8 md:gap-12">
          {/*Heading*/}
          <div className="flex flex-col items-center justify-center gap-4">
            {/*Badge*/}
            <Badge
              variant="outline"
              className="h-7 w-fit px-3 py-1 text-sm leading-5 font-normal"
            >
              Pricing V2
            </Badge>
            <div className="mx-auto max-w-3xs text-center sm:max-w-md">
              <h2 className="text-foreground text-3xl font-medium sm:text-5xl">
                Pick the plan that fits your start-up
              </h2>
            </div>
          </div>
          {/*Plans*/}
          <div className="flex h-full w-full flex-col items-stretch gap-6 lg:flex-row">
            {pricingData.map((plan: PricingPlan, index: number) => {
              const isFeatured = plan.plan_recommended;

              return (
                <motion.div
                  key={index}
                  variants={pricingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className={cn(
                    "relative flex w-full flex-1 flex-col",
                    isFeatured && "z-10 scale-102",
                  )}
                >
                  {/*Gradient Border*/}
                  {isFeatured && (
                    <div className="absolute -inset-0.5 overflow-hidden rounded-2xl">
                      {/*Animated conic-gradient border*/}
                      <div className="animation-duration:[2s] absolute -inset-full animate-spin bg-conic from-blue-500 via-red-500 to-teal-400 blur-xs"></div>
                      {/*Inner mask*/}
                      <div className="bg-card absolute inset-0.5 rounded-2xl"></div>
                    </div>
                  )}
                  {/*Card*/}
                  <Card
                    className={cn(
                      "relative flex flex-1 flex-col gap-8 rounded-2xl p-8",
                      isFeatured ? "border-0 ring-0" : "border-border border",
                    )}
                  >
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-3 self-stretch">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-primary text-2xl font-medium">
                            {plan.plan_name}
                          </CardTitle>
                          {isFeatured && (
                            <Badge className="flex h-7 w-fit items-center gap-1.5 px-3 py-1 text-sm leading-5 font-medium [&>svg]:size-4!">
                              <Flame size={16} /> Recommend
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="max-w-2x text-base font-normal">
                          {plan.plan_descp}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col gap-8 p-0">
                      <div className="flex items-baseline gap-1">
                        <span className="text-foreground text-4xl font-medium sm:text-5xl">
                          ${plan.plan_price}
                        </span>
                        <span className="text-muted-foreground text-base font-normal">
                          /month
                        </span>
                      </div>
                      <Separator orientation="horizontal" />
                      <ul className="flex flex-1 flex-col gap-4">
                        {plan.plan_feature?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground flex items-center gap-3 text-base font-normal"
                          >
                            <Check className="text-primary size-4 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="h-12 w-full cursor-pointer"
                        variant={isFeatured ? "default" : "outline"}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
