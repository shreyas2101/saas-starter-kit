import { CheckIcon } from "@/components/icons";
import { subscriptionTiersInOrder } from "@/config/subscriptionTiers";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatters";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { PRICING } from "../_copy";

const { TITLE, POPULAR, CARD, PRODUCTS, PRODUCT, FEATURES } = PRICING;

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-accent/5 px-8 py-16">
      <h2 className="mb-8 text-balance text-center text-4xl font-semibold">
        {TITLE}
      </h2>
      <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-4">
        {subscriptionTiersInOrder.map((tier) => (
          <PricingCard
            key={tier.name}
            {...tier}
            isMostPopular={tier.name === "Standard"}
          />
        ))}
      </div>
    </section>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 rounded-full bg-accent/25 stroke-accent p-0.5" />
      <span>{children}</span>
    </div>
  );
}

type PricingCardProps = (typeof subscriptionTiersInOrder)[number] & {
  isMostPopular?: boolean;
  cta?: string;
};

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
  isMostPopular = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-3xl shadow-none",
        isMostPopular ? "border-2 border-accent" : "border-none",
      )}
    >
      {isMostPopular && (
        <div className="absolute -right-8 top-24 origin-top-right rotate-45 bg-accent px-10 py-1 text-accent-foreground">
          {POPULAR}
        </div>
      )}
      <CardHeader>
        <div className="mb-8 font-semibold text-accent">{name}</div>
        <CardTitle className="text-xl font-bold">
          ${priceInCents / 100} {CARD.TITLE}
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} {CARD.SUBTITLE}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="w-full rounded-lg text-lg"
            variant={isMostPopular ? "accent" : "default"}
          >
            {CARD.CTA}
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <Feature className="font-bold">
          {maxNumberOfProducts} {maxNumberOfProducts === 1 ? PRODUCT : PRODUCTS}
        </Feature>
        <Feature>{FEATURES[1]}</Feature>
        {canAccessAnalytics && <Feature>{FEATURES[2]}</Feature>}
        {canRemoveBranding && <Feature>{FEATURES[3]}</Feature>}
        {canCustomizeBanner && <Feature>{FEATURES[4]}</Feature>}
      </CardFooter>
    </Card>
  );
}
