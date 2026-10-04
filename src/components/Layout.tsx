import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#E63329]">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
