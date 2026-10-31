"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { colourCode, images } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function DressCode() {
  const reduce = useReducedMotion();

  return (
    <section id="dress-code" className="bg-sand px-6 py-16 lg:p-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex w-full flex-col gap-4 lg:w-[490px] lg:shrink-0 lg:gap-7">
          <div className="flex flex-col gap-4 lg:gap-3">
            <h2 className="font-display text-[36px] leading-[1.12] text-forest lg:text-[60px] lg:leading-[64px] lg:tracking-[-2px]">
              <SplitText text={colourCode.title} inView />
            </h2>
            <Reveal delay={0.15}>
              <p className="font-display text-[29px] font-bold leading-[1.333] text-accent-pink lg:text-[40px] lg:leading-normal">
                {colourCode.palette}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <p className="text-[14px] leading-[1.65] text-muted lg:text-[16px] lg:leading-[1.6]">{colourCode.copy}</p>
          </Reveal>
        </div>

        <Reveal className="w-full lg:w-[637.15px] lg:shrink-0" delay={0.1}>
          <div className="relative h-[367px] w-full overflow-hidden rounded-[16px] lg:aspect-[637.15/684] lg:h-auto lg:rounded-[18.74px]">
            <motion.div
              className="absolute inset-0"
              initial={reduce ? undefined : { scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease }}
            >
              <Image
                src={images.dressPalette}
                alt="Stack of folded fabrics in shades of blue: mist, sky blue, dusty blue, cornflower, denim blue, steel blue, cobalt and deep ocean"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
