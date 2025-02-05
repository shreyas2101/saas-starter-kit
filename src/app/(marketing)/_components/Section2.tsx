import Link from "next/link";
import { NeonIcon } from "../_icons/Neon";
import { ClerkIcon } from "../_icons/Clerk";
import { SECTION2 } from "../_copy";

const { TITLE } = SECTION2;
export default function Section2() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container flex flex-col gap-16 px-8 py-16 md:px-16">
        <h2 className="text-balance text-center text-3xl">{TITLE}</h2>
        <div className="grid grid-cols-2 gap-16 md:grid-cols-3 xl:grid-cols-5">
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link href="https://clerk.com">
            <ClerkIcon />
          </Link>
          <Link href="https://neon.tech">
            <NeonIcon />
          </Link>
          <Link className="md:max-xl:hidden" href="https://clerk.com">
            <ClerkIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
