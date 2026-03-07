import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface TestimonialProps {
  badge?: string;
  title?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Syntax replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Walter Dutcher",
    role: "CEO",
    image:
      "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
  },
  {
    quote:
      "Syntax replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Walter Dutcher",
    role: "CEO",
    image:
      "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
  },
];
export default function TestimonialPage({
  testimonials = defaultTestimonials,
}: TestimonialProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section ref={sectionRef} id="testimonial" className="py-10 xl:py-0">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <Badge variant="outline" className="h-auto w-fit px-3 py-1 text-sm">
              Testimonials
            </Badge>
            <h2 className="tracking text-xl leading-none font-medium sm:text-5xl">
              Success Stories
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="pt-12 pb-8"
          >
            <Carousel>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="grid grid-cols-12 items-center gap-6">
                      <div className="col-span-12 flex flex-col gap-6 sm:flex-row sm:gap-10 lg:col-span-8 lg:pe-12">
                        <div className="flex shrink-0 items-start">
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote.svg"
                            alt="muted quote"
                            className="dark:hidden"
                          />
                          <img
                            src="https://images.shadcnspace.com/assets/svgs/icon-quote-white.svg"
                            alt="muted quote"
                            className="hidden dark:block"
                          />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="text-muted-foreground text-xl sm:text-4xl">
                            {testimonial.quote}
                          </p>
                          <div>
                            <p className="text-base font-medium">
                              {testimonial.author}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-4">
                        <div className="overflow-hidden rounded-xl">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={500}
                            height={500}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className={"-top-20 right-12 left-auto size-8 cursor-pointer"}
              />
              <CarouselNext
                className={"-top-20 right-0 size-8 cursor-pointer"}
              />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
