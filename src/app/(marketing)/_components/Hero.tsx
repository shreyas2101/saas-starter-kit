import { ArrowRightIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { HERO_SECTION } from "../_copy";

const { TITLE, SUBTITLE, CTA } = HERO_SECTION;

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 text-balance bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] px-4 text-center">
      <h1 className="m-4 text-6xl font-bold tracking-tight lg:text-7xl xl:text-8xl">
        {TITLE}
      </h1>
      <p className="max-w-screen-xl text-lg lg:text-3xl">{SUBTITLE}</p>
      <SignUpButton>
        <Button className="flex gap-2 rounded-xl p-6 text-lg">
          {CTA} <ArrowRightIcon className="size-5" />
        </Button>
      </SignUpButton>
    </section>
  );
}
