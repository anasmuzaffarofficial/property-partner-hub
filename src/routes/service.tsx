import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, Building2, TrendingUp, Scale, Landmark, Users, ArrowRight, Search, FileCheck, Handshake, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/Counter";
import { FAQ } from "@/components/FAQ";
import { ConsultationForm } from "@/components/ConsultationForm";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Real Estate Services — Aitemad Marketing" },
      { name: "description", content: "Property buying, selling, investment advisory, legal guidance, and market analysis across Karachi and Pakistan." },
      { property: "og:title", content: "Real Estate Services — Aitemad Marketing" },
      { property: "og:description", content: "End-to-end real estate advisory built around your investment goals." },
    ],
  }),
  component: ServicePage,
});

const services = [
  { icon: Home, title: "Property Buying Advisory", desc: "Guidance through selection, negotiation, and legal transfer of residential and commercial properties." },
  { icon: Building2, title: "Property Selling Advisory", desc: "Position, price, and market your property to genuine buyers for a secure and profitable sale." },
  { icon: TrendingUp, title: "Investment Planning", desc: "Tailored real estate portfolios built for rental yield and long-term capital appreciation." },
  { icon: Scale, title: "Legal Guidance & Documentation", desc: "Complete legal review, documentation, and transfer support so your investment stays protected." },
  { icon: Landmark, title: "Market Analysis & Reports", desc: "Data-backed insights on prices, demand, and upcoming projects across major Pakistani cities." },
  { icon: Users, title: "Dedicated Client Support", desc: "A single senior advisor with you from first call through possession — and beyond." },
];

const steps = [
  { icon: Search, title: "Consultation", desc: "We sit down to understand your goals, budget, and risk appetite — no obligation." },
  { icon: Home, title: "Property Matching", desc: "You get a shortlist of verified opportunities that fit your brief, not our commission." },
  { icon: FileCheck, title: "Legal Review", desc: "Our legal team validates title, chain of ownership, and transfer paperwork end-to-end." },
  { icon: Handshake, title: "Closing & Handover", desc: "We negotiate, close, and handle the transfer — you sign, we handle everything else." },
];

const caseStudies = [
  { name: "Ahmed R.", role: "Overseas Investor · Dubai", quote: "Bought a DHA apartment fully remotely. Aitemad handled site visits, negotiation, and transfer. Rental is 20% above what I projected.", result: "20% Above Projected Yield" },
  { name: "Sarah K.", role: "First-time Home Buyer · Karachi", quote: "Two months from first call to keys in hand. Every document reviewed, every question answered. Zero surprises at closing.", result: "Closed in 60 Days · Zero Disputes" },
];

function ServicePage() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium">Our Services</div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">Real Estate Solutions Built Around Your Goals</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">Advisory-first real estate: verified opportunities, transparent legal work, and a dedicated advisor from first call to final possession.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 mt-4">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Service Overview Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Six Ways We Work With You</h2>
            <p className="text-gray-600 text-lg mt-3">From first purchase to portfolio expansion, choose the advisory service that fits where you are today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Card className="h-full border-gray-100 hover:border-primary hover:shadow-xl transition-all group">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><s.icon size={26} /></div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                    <Link to="/contact" className="inline-flex items-center text-primary font-medium text-sm gap-1 hover:gap-2 transition-all">Learn More <ArrowRight size={14} /></Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">The Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">How Working With Us Looks</h2>
            <p className="text-gray-600 text-lg mt-3">A structured four-step process — you always know what happens next.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/60 to-primary/20" />
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center bg-gray-50 px-4">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center mx-auto mb-4 relative z-10">
                  <s.icon className="text-primary" size={24} />
                </div>
                <div className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Our Advisory Works */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">Why Our Advisory Works</h2>
            <p className="text-blue-100 text-lg mt-3">Numbers that reflect a decade of transparent, investor-focused practice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { end: 100, suffix: "%", label: "Verified Listings Only", desc: "Every property passes title and ownership review before we market it." },
              { end: 15, suffix: "%", label: "Avg. ROI Guidance", desc: "Average annual return advisory clients see across investment portfolios." },
              { end: 0, suffix: "", label: "Legal Disputes on Closed Deals", desc: "Zero post-closing disputes across all deals we've supported." },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-white"><Counter end={s.end} suffix={s.suffix} /></div>
                <h3 className="text-xl font-bold mt-4 mb-2 font-heading">{s.label}</h3>
                <p className="text-blue-100 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Success Snapshots</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Real Clients. Real Outcomes.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((c) => (
              <Card key={c.name} className="border-gray-100 shadow-lg">
                <CardContent className="p-8 space-y-6">
                  <Quote className="text-primary/30" size={40} />
                  <p className="text-lg text-gray-700 italic leading-relaxed">"{c.quote}"</p>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">{c.name.charAt(0)}</div>
                      <div><p className="font-bold text-gray-900">{c.name}</p><p className="text-xs text-gray-500">{c.role}</p></div>
                    </div>
                    <div className="text-right"><div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-blue-50 px-3 py-1.5 rounded-full"><CheckCircle2 size={12} />{c.result}</div></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FAQ
        title="Service FAQs"
        subtitle="Common questions about how our real estate advisory works."
        faqs={[
          { q: "Do you charge for an initial consultation?", a: "No — first consultations are always free. We only invoice on successful transactions or a small, clearly disclosed documentation fee." },
          { q: "Which cities do you cover?", a: "Karachi is our primary market. We regularly advise on investment opportunities in Lahore, Islamabad, and Bahria/DHA developments countrywide." },
          { q: "Can you help me buy from overseas?", a: "Yes. We handle remote site visits with recorded walkthroughs, documentation via courier / e-sign, and payment coordination with your local bank." },
          { q: "How do I know a listing is actually verified?", a: "Every listing on our platform has been through a title and encumbrance check. We'll share the verification summary with you before you commit." },
          { q: "Do you help arrange bank financing?", a: "Yes — through our partner banks. We help package your documentation to give the fastest possible approval." },
          { q: "What happens after I buy? Do you stay involved?", a: "Yes. Optional post-purchase property management covers tenant sourcing, rent collection, and maintenance coordination." },
        ]}
      />

      {/* 7. Consultation CTA */}
      <ConsultationForm
        heading="Ready to Start? Book Your Free Consultation."
        subheading="Tell us where you are today. We'll respond within 24 hours with a shortlist and a clear next step."
      />
    </SiteLayout>
  );
}
