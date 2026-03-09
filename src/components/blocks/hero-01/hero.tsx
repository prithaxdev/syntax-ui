import SplashCursor from "@/components/animations/splash-cursor";
import { Button } from "@/components/ui/button";
import { fonts } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

const GetStartedButton = ({ className }: { className?: string }) => (
  <Button
    className={cn(
      "group relative h-10 w-fit overflow-hidden rounded-full p-1 ps-4 pe-12 text-sm font-medium transition-all duration-500 hover:ps-12 hover:pe-4",
      className,
    )}
  >
    <span className="relative z-10 transition-all duration-500">
      Get Started
    </span>
    <span className="bg-background text-foreground absolute right-1 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </span>
  </Button>
);

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 -z-1">
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
        />
      </div>
      <div className="relative w-full pt-0 pb-6 before:absolute before:top-24 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:blur-3xl md:pt-20 md:pb-10 dark:before:-z-10 dark:before:rounded-full dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:blur-3xl">
        <div className="relative z-10 container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-center text-5xl leading-14 font-medium md:text-7xl md:leading-20 lg:text-8xl lg:leading-24"
            >
              Building bold brands with{" "}
              <span
                className="tracking-tight italic"
                style={{ fontFamily: `'${fonts.instrumentSerif}', serif` }}
              >
                thoughtful design
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className="text-muted-foreground mx-auto max-w-2xl text-center text-base font-normal"
            >
              At shadcn space, we help small startups tackle the world's biggest
              challenges with tailored solutions, guiding you from strategy to
              success in a competitive market.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="my-10 flex flex-col items-center justify-center gap-8 md:flex-row"
          >
            <GetStartedButton />
            <div className="flex items-center gap-3 sm:gap-7">
              <ul className="avatar flex flex-row items-center">
                {avatarList.map((avatar, index) => (
                  <li key={index} className="avatar-hover:ml-2 z-1 -mr-2">
                    <img
                      src={avatar.image}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                      alt="star"
                      className="h-4 w-4"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-xs font-normal sm:text-sm">
                  Trusted by 1000+ clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
