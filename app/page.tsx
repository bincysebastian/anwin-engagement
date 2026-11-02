import { BackgroundMusic } from "@/components/BackgroundMusic";
import { BottomBlur } from "@/components/BottomBlur";
import { Countdown } from "@/components/sections/Countdown";
import { DateJourney } from "@/components/sections/DateJourney";
import { DressCode } from "@/components/sections/DressCode";
import { Families } from "@/components/sections/Families";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/OurStory";
import { Rsvp } from "@/components/sections/Rsvp";
import { EngagementDay } from "@/components/sections/EngagementDay";
import { WithLove } from "@/components/sections/WithLove";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <DateJourney />
        <Families />
        <EngagementDay />
        <OurStory />
        <DressCode />
        <Countdown />
        <Rsvp />
        <WithLove />
      </main>
      <BottomBlur />
      <BackgroundMusic />
    </>
  );
}
