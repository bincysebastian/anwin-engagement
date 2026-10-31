"use client";

import { CroppedImage } from "@/components/CroppedImage";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { ourStoryIntro, storyChapters } from "@/lib/content";

function Polaroid({ chapter }: { chapter: (typeof storyChapters)[number] }) {
  return (
    <div className="relative bg-[#fffcf5] px-3 pb-4 pt-3 shadow-[0_8px_10px_rgba(70,53,39,0.1)] sm:px-4 sm:pb-5 sm:pt-4">
      <div className="pointer-events-none absolute left-1/2 top-[-12px] h-6 w-20 -translate-x-1/2 -rotate-3 bg-[#d8c6a8]/60 sm:top-[-16px] sm:h-7 sm:w-24" />
      <div className="relative aspect-[446/390] w-full overflow-hidden">
        <CroppedImage src={chapter.image} crop={chapter.crop} fit="fill" alt={chapter.title} sizes="480px" />
      </div>
      <div className="mt-3 flex items-center justify-between sm:mt-[18px]">
        <p className="font-script text-[26px] leading-none tracking-[0.1em] text-forest sm:text-[30px]">{chapter.year}</p>
        <span className="h-px w-16 bg-[#cdbdb4] sm:w-20" />
      </div>
    </div>
  );
}

export function OurStory() {
  const [first, second] = storyChapters;

  return (
    <section id="our-story" className="overflow-hidden bg-story-bg px-6 py-16 lg:px-[140px] lg:py-20">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-10">
        <div className="flex w-full max-w-[840px] flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-5">
            <span className="h-px w-10 bg-[#cdbdb4] sm:w-[60px]" />
            <p className="text-[10px] uppercase text-forest">Our Story</p>
            <span className="h-px w-10 bg-[#cdbdb4] sm:w-[60px]" />
          </div>
          <h2 className="font-display text-[36px] leading-[1.14] text-forest lg:text-[58px]">
            <SplitText text="The Journey" inView />
            <br />
            <SplitText text="That Brought Us Here." inView delay={0.15} />
          </h2>
          <Reveal delay={0.2}>
            <p className="max-w-[660px] text-[14px] leading-[1.7] text-story-muted lg:text-[15px]">{ourStoryIntro}</p>
          </Reveal>
        </div>

        <div className="relative hidden h-[560px] w-full max-w-[1100px] lg:block">
          <div className="absolute left-[4%] top-[11px] w-[43.5%] origin-center -rotate-[4deg]">
            <Polaroid chapter={first} />
          </div>
          <div className="absolute left-[49.7%] top-[33px] w-[43.5%] origin-center rotate-[4deg]">
            <Polaroid chapter={second} />
          </div>
        </div>

        <div className="flex w-full max-w-[420px] flex-col gap-8 lg:hidden">
          <div className="-rotate-[3deg]">
            <Polaroid chapter={first} />
          </div>
          <div className="rotate-[3deg]">
            <Polaroid chapter={second} />
          </div>
        </div>

        <div className="grid w-full max-w-[1040px] gap-10 lg:grid-cols-2 lg:gap-[120px]">
          {storyChapters.map((c) => (
            <Reveal key={c.year} className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <p className="text-[11px] text-forest">{c.year}</p>
                <span className="h-px flex-1 bg-[#cdbdb4]" />
              </div>
              <h3 className="font-chapter text-[32px] leading-[1.1] text-forest lg:text-[38px]">{c.title}</h3>
              <p className="text-[14px] leading-[1.8] text-story-muted">{c.copy}</p>
            </Reveal>
          ))}
        </div>

        <div className="w-full max-w-[1040px]">
          <div className="flex items-center">
            <span className="size-[7px] shrink-0 rounded-full bg-forest" />
            <span className="h-px flex-1 bg-[#cdbdb4]" />
            <span className="size-[7px] shrink-0 rounded-full bg-forest" />
          </div>
          <div className="mt-3.5 flex justify-between text-[12px] text-forest">
            <span>{first.year}</span>
            <span>{second.year}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
