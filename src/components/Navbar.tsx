import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Plus, LogOut, LayoutList, ShieldCheck } from "lucide-react";
import { Link, useRouter, useRouterState, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertyIdQuery, setPropertyIdQuery] = useState("");
  const { user, isAdmin, openAuthModal, logout } = useAuth();

  useEffect(() => {
    if (!transparentOnTop) { setScrolled(true); return; }
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const t = propertyIdQuery.trim();
    if (!t) return;
    navigate({ to: "/properties", search: { q: t } as any });
    setPropertyIdQuery("");
    setMobileMenuOpen(false);
  };

  const addPropertyClick = () => {
    setMobileMenuOpen(false);
    if (user) navigate({ to: "/add-property" });
    else openAuthModal("login");
  };

  const dark = scrolled || mobileMenuOpen;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0 z-50 relative">
            <img
              src={dark ? "/logo-white.jpeg" : "/logo-dark.jpeg"}
              alt="Aitemad Marketing"
              className="h-10 md:h-14 w-auto object-contain rounded"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${scrolled ? "text-gray-800" : "text-white"} ${pathname === link.href ? "text-primary" : ""}`}
              >
                {link.name}
              </Link>
            ))}

            <form onSubmit={handleSearch} className="relative w-44 xl:w-56">
              <Search size={16} className={`absolute left-3 top-1/2 -translate-y-1/2 ${scrolled ? "text-gray-400" : "text-white/70"}`} />
              <Input
                value={propertyIdQuery}
                onChange={(e) => setPropertyIdQuery(e.target.value)}
                placeholder="Search properties"
                className={`h-9 pl-9 text-sm ${scrolled ? "bg-gray-50 border-gray-200" : "bg-white/10 border-white/30 text-white placeholder:text-white/70"}`}
              />
            </form>

            {user ? (
              <div className="flex items-center gap-3">
                {isAdmin && (
                  <Link to="/admin" className={`flex items-center gap-1.5 text-sm font-medium hover:text-primary ${scrolled ? "text-gray-800" : "text-white"}`}>
                    <ShieldCheck size={16} /> Admin
                  </Link>
                )}
                <Link to="/my-listings" className={`flex items-center gap-1.5 text-sm font-medium hover:text-primary ${scrolled ? "text-gray-800" : "text-white"}`}>
                  <LayoutList size={16} /> My Listings
                </Link>
                <Button size="sm" onClick={addPropertyClick} className="bg-primary text-white hover:bg-primary/90 gap-1.5">
                  <Plus size={16} /> Add Property
                </Button>
                <button onClick={() => logout()} className={`p-2 rounded-md hover:bg-black/5 ${scrolled ? "text-gray-700" : "text-white"}`} aria-label="Log out">
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => openAuthModal("login")}
                  className={`text-sm font-medium hover:text-primary ${scrolled ? "text-gray-800" : "text-white"}`}
                >
                  Log In
                </button>
                <Button size="sm" onClick={addPropertyClick} className={scrolled ? "bg-primary text-white hover:bg-primary/90 gap-1.5" : "bg-white text-primary hover:bg-white/90 gap-1.5"}>
                  <Plus size={16} /> Add Property
                </Button>
              </>
            )}
          </nav>

          <button className={`lg:hidden z-50 p-2 ${dark ? "text-gray-900" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center h-screen overflow-y-auto py-24">
            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-heading font-semibold text-gray-900 hover:text-primary">
                  {link.name}
                </Link>
              ))}
              {user && (
                <Link to="/my-listings" onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-primary flex items-center gap-2">
                  <LayoutList size={18} /> My Listings
                </Link>
              )}
              {isAdmin && (
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-primary flex items-center gap-2">
                  <ShieldCheck size={18} /> Admin
                </Link>
              )}
              <Button size="lg" className="mt-4 bg-primary text-white gap-2 w-full max-w-xs" onClick={addPropertyClick}>
                <Plus size={18} /> Add Property
              </Button>
              {user ? (
                <button className="text-sm font-medium text-gray-500 hover:text-primary flex items-center gap-1.5"
                  onClick={() => { setMobileMenuOpen(false); logout(); }}>
                  <LogOut size={14} /> Log out
                </button>
              ) : (
                <button className="text-sm font-medium text-primary" onClick={() => { setMobileMenuOpen(false); openAuthModal("login"); }}>
                  Log In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
