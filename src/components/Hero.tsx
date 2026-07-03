import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ShieldCheck, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url(/hero-bg.png)" }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 to-primary-dark/85 mix-blend-multiply" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm font-medium">
            <ShieldCheck size={16} /> Verified Listings · Trusted Since 2015
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
            Invest Smart. Buy Better.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Build Wealth With Confidence.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            Helping investors, buyers, and sellers make profitable real estate decisions through expert advisory and premium opportunities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-base">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 h-14 px-8 text-base bg-transparent">
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 text-sm text-white/80">
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-200" /> 1000+ Happy Clients</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-200" /> Verified Listings Only</span>
            <span className="flex items-center gap-2"><CheckCircle size={16} className="text-blue-200" /> Zero Legal Disputes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
