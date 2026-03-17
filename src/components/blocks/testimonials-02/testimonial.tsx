import { Marquee } from "@/components/animations/marquee";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    body: "“This is easily one of the most reliable SaaS tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
  {
    name: "Jessica",
    username: "@jessica",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.",
    profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "“We evaluated multiple solutions, but this stood out immediately. It’s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”",
    profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="border-border bg-card relative h-full w-64 cursor-pointer overflow-hidden p-4 shadow-none">
      <CardContent className="flex flex-col gap-2 p-0">
        <div className="flex flex-row items-center gap-2">
          <img height="32" width="32" src={profile} alt="" />
          <div className="flex flex-col">
            <p className="text-foreground text-sm font-medium">{name}</p>
            <p className="text-muted-foreground text-xs font-medium">
              {username}
            </p>
          </div>
        </div>
        <p className="text-foreground line-clamp-2 text-sm">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarquee() {
  return (
    <section id="testimonial02" className="py-10 xl:py-0">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="my-4 flex flex-col gap-3"
          >
            <Badge variant="outline" className="h-auto w-fit px-3 py-1 text-sm">
              Testimonials V2
            </Badge>
          </motion.div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
