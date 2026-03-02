import { Marquee } from "@/components/animations/marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section>
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="relative flex justify-center py-3 text-center md:py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="from-muted-foreground dark:from-muted-foreground hidden h-0.5 w-40 bg-linear-to-l to-white opacity-20 md:block dark:to-transparent" />
                <p className="text-muted-foreground px-10 text-center text-sm font-normal sm:px-2">
                  Loved by 1000+ big and small brands around the worlds
                </p>
                <div className="from-muted-foreground dark:from-muted-foreground hidden h-0.5 w-40 bg-linear-to-r to-white opacity-20 md:block dark:to-transparent" />
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="p-0 [--duration:20s]">
                  {brandList.map((brand, index) => (
                    <div key={index}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="mr-6 h-8 w-36 lg:mr-20 dark:hidden"
                      />
                      <img
                        src={brand.lightimg}
                        alt={brand.name}
                        className="mr-12 hidden h-8 w-36 lg:mr-20 dark:block"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
