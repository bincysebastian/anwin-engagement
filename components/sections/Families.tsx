import { Reveal } from "@/components/motion/Reveal";
import { families as f } from "@/lib/content";

const label =
  "text-[10px] font-semibold uppercase leading-[1.7] lg:text-[13px] lg:font-bold lg:leading-[18px] lg:tracking-[2px]";
const script = "font-script text-[20px] leading-[1.4] lg:text-[24px] lg:leading-normal";
const house = "text-[12px] leading-[1.65] lg:text-[14px] lg:font-bold lg:leading-[1.6]";
const name = "font-display leading-[1.12] lg:text-[40px] lg:font-bold lg:leading-normal";

export function Families() {
  return (
    <section id="families" className="bg-white px-6 pb-16 lg:px-[120px] lg:pb-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center text-forest">
        <Reveal className="flex max-w-[651px] flex-col items-center">
          <p className={label}>{f.grandparentsLabel}</p>
          <div className={`mt-4 ${script}`}>
            {f.grandparentsLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center lg:mt-12" delay={0.05}>
          <p className={label}>{f.parentsLabel}</p>
          <p className={`mt-4 ${script}`}>{f.parents}</p>
          <p className={`mt-6 lg:mt-10 ${house}`}>{f.brideHouse}</p>
        </Reveal>

        <Reveal className="mt-6 max-w-[651px] lg:mt-8" delay={0.08}>
          <div className={`${script} text-[20px]`}>
            {f.requestLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className={`mt-6 lg:mt-8 ${name}`}>{f.bride}</h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className={`mt-6 lg:mt-8 ${label}`}>{f.joiner}</p>
          <h2 className={`mt-6 lg:mt-8 ${name}`}>{f.groom}</h2>
        </Reveal>

        <Reveal className="flex flex-col items-center" delay={0.15}>
          <p className={`mt-6 lg:mt-8 ${script}`}>{f.groomParents}</p>
          <p className={`mt-4 ${script}`}>{f.groomGrandparents}</p>
          <p className={`mt-6 lg:mt-10 ${house}`}>{f.groomHouse}</p>
        </Reveal>
      </div>
    </section>
  );
}
