import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, ShieldCheck, Users, Handshake } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aitemad Marketing — Trusted Real Estate Advisory" },
      { name: "description", content: "A decade-long legacy of trust in Pakistan's real estate market. Meet the team and mission behind Aitemad Marketing." },
      { property: "og:title", content: "About Aitemad Marketing" },
      { property: "og:description", content: "Karachi-based real estate advisory with a decade of transparent client outcomes." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", desc: "To build long-term wealth for our clients through transparent, data-driven real estate advisory — every deal, every time." },
  { icon: Eye, title: "Our Vision", desc: "To be Pakistan's most trusted real estate advisory brand — the first name overseas and local investors think of." },
  { icon: Heart, title: "Our Values", desc: "Integrity, transparency, and long-term relationships over short-term commissions. It's the only way we work." },
];

const team = [
  { name: "M. Aitemad", role: "Founder & Chief Advisor", initial: "A" },
  { name: "Bilal Hassan", role: "Head of Investment Advisory", initial: "B" },
  { name: "Fatima Sheikh", role: "Legal & Documentation Lead", initial: "F" },
  { name: "Ali Raza", role: "Client Success Manager", initial: "A" },
];

const trust = [
  { icon: ShieldCheck, title: "Verified Listings", desc: "Every property title-checked before we list it." },
  { icon: Users, title: "1000+ Happy Clients", desc: "A decade of relationships with buyers, sellers, and investors." },
  { icon: Handshake, title: "Zero Legal Disputes", desc: "Not a single post-closing legal dispute across our transactions." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url(/about-office.png)" }} />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 to-primary-dark/85" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium">About Us</div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">A Legacy of Trust in Pakistan's Real Estate</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">A decade-long commitment to honest advisory, verified opportunities, and long-term client wealth.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm">Our Story</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading leading-tight">Built On A Simple Frustration</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Aitemad Marketing started with a problem the founder lived through himself — buying real estate in Pakistan without clear title checks, transparent pricing, or genuine post-sale support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A decade later, we've grown into a Karachi-based advisory firm serving buyers, sellers, and investors from Pakistan and the diaspora. We're deliberately advisory-first: we make our money on trust and repeat clients, not on maximum-commission listings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every listing on our platform passes legal verification. Every client gets a dedicated senior advisor. And every deal is documented so the next generation of buyers can trust the market too.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img src="/about-office.png" alt="Aitemad office" className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
                <p className="font-heading font-semibold text-lg leading-tight">"Trust is the only thing we're actually selling."</p>
                <p className="text-xs text-blue-100 mt-2">— Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission / Vision / Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-gray-100 shadow-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary text-white flex items-center justify-center"><v.icon size={26} /></div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{v.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Bar */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 1000, suffix: "+", label: "Happy Clients" },
              { end: 10, suffix: "+", label: "Years Experience" },
              { end: 500, suffix: "+", label: "Projects Closed" },
              { end: 8, suffix: "+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-white"><Counter end={s.end} suffix={s.suffix} /></div>
                <p className="text-blue-100 mt-2 text-sm md:text-base">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">The Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">The People Behind Every Deal</h2>
            <p className="text-gray-600 text-lg mt-3">Senior advisors, legal experts, and client success managers — one dedicated point of contact per client.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center text-3xl font-bold font-heading mb-4">{m.initial}</div>
                <h3 className="font-bold text-gray-900 font-heading">{m.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Office Gallery */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Inside Aitemad</h2>
            <p className="text-gray-600 text-lg mt-3">A quick look at where we work and the culture behind our client outcomes.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {["/about-office.png", "/project-1.png", "/project-3.png", "/project-5.png", "/project-6.png", "/project-2.png", "/project-4.png", "/blog-1.png"].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
                <img src={src} alt="Aitemad office" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Trust & Credentials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Why Clients Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Trust You Can Verify</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trust.map((t) => (
              <Card key={t.title} className="border-gray-100 shadow-sm">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 text-primary flex items-center justify-center"><t.icon size={26} /></div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">{t.title}</h3>
                  <p className="text-gray-600">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Closing CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Ready to Work With Us?</h2>
          <p className="text-blue-100 text-lg mb-8">Book a free consultation or explore our verified listings.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8"><Link to="/contact">Book Consultation</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 h-14 px-8 bg-transparent"><Link to="/service">See Our Services</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
