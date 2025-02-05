import { type ReactNode } from "react";
import { MarketingNavBar } from "./_components/NavBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <MarketingNavBar />
      {children}
    </div>
  );
}
