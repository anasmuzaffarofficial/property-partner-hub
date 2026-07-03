import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { AuthModal } from "./AuthModal";

export function SiteLayout({ children, transparentNav = false }: { children: ReactNode; transparentNav?: boolean }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar transparentOnTop={transparentNav} />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingButtons />
      <AuthModal />
    </div>
  );
}
