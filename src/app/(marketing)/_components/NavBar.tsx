import { BrandLogo } from "@/components/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LoginIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

type NavigationItem = {
  href: string;
  label: ReactNode;
  className?: string;
  asChild?: boolean;
};

const MARKETING_NAVIGATION: NavigationItem[] = [
  {
    href: "#",
    label: "Features",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "/dashboard",
    label: (
      <SignedIn>
        <Link href="/dashboard">Dashboard</Link>
      </SignedIn>
    ),
    asChild: true,
  },
  {
    href: "#",
    asChild: true,
    label: (
      <>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button className="flex cursor-pointer items-center gap-1">
              Login <LoginIcon />
            </Button>
          </SignInButton>
        </SignedOut>
      </>
    ),
  },
];

export function MarketingNavBar() {
  return (
    <header className="fixed top-0 z-10 flex w-full bg-background/95 py-6 shadow-xl">
      <nav className="container flex items-center gap-10 font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        {MARKETING_NAVIGATION.map((item, index) => (
          <NavBarItem key={index} {...item} />
        ))}
      </nav>
    </header>
  );
}

function NavBarItem({
  href,
  label,
  className = "",
  asChild = false,
}: NavigationItem): JSX.Element {
  if (!asChild)
    return (
      <Link href={href} legacyBehavior passHref className={cn(className)}>
        {label}
      </Link>
    );

  return <>{label}</>;
}
