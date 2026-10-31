"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, site } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function WithLove() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const heartScale = useTransform(scrollYProgress, [0, 1], [0.72, 1]);
  const photoScale = useTransform(scrollYProgress, [0.15, 1], [1.12, 1]);

  return (
    <section ref={ref} className="bg-with-love-bg">
      <div className="relative mx-auto h-[700px] w-full max-w-[430px] overflow-hidden lg:hidden">
        <motion.div
          className="pointer-events-none absolute left-1/2 top-[8%] w-[118%] -translate-x-1/2"
          style={reduce ? undefined : { scale: heartScale }}
        >
          <Image src={images.heartBackdrop} alt="" width={840} height={800} className="h-auto w-full" />
        </motion.div>

        <motion.p
          className="absolute left-[6%] top-[4%] z-20 font-display text-[68px] italic leading-none text-forest"
          initial={reduce ? undefined : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease }}
        >
          {site.bride}
        </motion.p>

        <motion.p
          className="absolute right-[7%] top-[13%] z-20 rotate-[8deg] font-script text-[26px] text-forest"
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          with love
        </motion.p>
        <motion.div
          className="absolute right-[5%] top-[19%] z-0"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={images.handDrawnHeart} alt="" width={54} height={48} className="rotate-[10deg]" />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-[17%] z-10 w-[70%] -translate-x-1/2 -rotate-[3deg]"
          initial={reduce ? undefined : { opacity: 0, y: 40, rotate: -12, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.05, delay: 0.1, ease }}
        >
          <div className="relative bg-cream p-2.5 shadow-[0_16px_36px_rgba(78,24,41,0.14)]">
            <div className="pointer-events-none absolute left-1/2 top-[-13px] h-6 w-[88px] -translate-x-1/2 -rotate-[8deg] bg-[#e4d4b6]/80" />
            <div className="relative aspect-[416/520] overflow-hidden">
              <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: photoScale }}>
                <Image src={images.withLovePhoto} alt="Bia and Anwin" fill sizes="80vw" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[12%] left-[8%] z-20"
          initial={reduce ? undefined : { opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.3 }}
        >
          <Image src={images.heartFlourish} alt="" width={52} height={48} className="-rotate-[14deg]" />
        </motion.div>
        <motion.p
          className="absolute bottom-[7%] right-[6%] z-20 font-display text-[58px] italic leading-none text-forest"
          initial={reduce ? undefined : { opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          {site.groom}
        </motion.p>
      </div>

      <div className="relative mx-auto hidden h-[940px] w-full max-w-[1440px] overflow-hidden lg:block">
        <motion.div className="absolute left-[300px] top-20" style={reduce ? undefined : { scale: heartScale }}>
          <Image src={images.heartBackdrop} alt="" width={840} height={800} />
        </motion.div>

        <motion.p
          className="absolute left-[130px] top-[211px] w-[414px] font-display text-[168px] italic leading-[1.1] text-forest"
          initial={reduce ? undefined : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease }}
        >
          {site.bride}
        </motion.p>
        <motion.p
          className="absolute left-[944px] top-[595px] w-[430px] font-display text-[127px] italic leading-[1.2] text-forest"
          initial={reduce ? undefined : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          {site.groom}
        </motion.p>

        <motion.p
          className="absolute left-[1040px] top-[203px] w-[268px] rotate-[8deg] font-script text-[49px] text-forest"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
        >
          with love
        </motion.p>
        <motion.div
          className="absolute left-[1111px] top-[302px]"
          animate={reduce ? undefined : { y: [0, -8, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src={images.handDrawnHeart} alt="" width={76} height={67} />
        </motion.div>
        <motion.div
          className="absolute left-[256px] top-[623px]"
          initial={reduce ? undefined : { opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.4 }}
        >
          <motion.div
            className="-rotate-[17deg]"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src={images.heartFlourish} alt="" width={108} height={102} />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-[463px] top-[92px] w-[448px] -rotate-6"
          initial={reduce ? undefined : { opacity: 0, y: 70, rotate: -14, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, rotate: -6, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.15, ease }}
        >
          <div className="relative bg-cream p-4 shadow-[0_12px_28px_rgba(78,24,41,0.11)]">
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[-22px] h-11 w-[168px] -translate-x-1/2 -rotate-[10deg] bg-[#e4d4b6]/75"
              initial={reduce ? undefined : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.65, ease }}
            />
            <div className="relative aspect-[416/566] overflow-hidden">
              <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: photoScale }}>
                <Image src={images.withLovePhoto} alt="Bia and Anwin" fill sizes="448px" className="object-cover" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="bg-white px-6 pb-8 lg:px-[166px] lg:pb-[63px] lg:pt-5">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between border-t border-[#d8cfc2] pt-[22px] text-[10px] uppercase lg:pt-5 lg:font-inter lg:text-[12px] lg:font-medium lg:leading-[14.4px] lg:tracking-[1.68px]">
          <p className="text-[#5e5750]">{site.footerDate}</p>
          <a href="#top" className="text-[#985641] transition-opacity hover:opacity-70">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  );
}
