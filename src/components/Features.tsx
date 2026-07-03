import { motion } from "framer-motion";
import { Shield, Users2, Scale, LineChart, Briefcase, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  { title: "Verified Opportunities", desc: "We only market projects that pass our rigorous due diligence and legal checks.", icon: Shield },
  { title: "Property Experts", desc: "Seasoned consultants with deep knowledge of Karachi's real estate dynamics.", icon: Users2 },
  { title: "Legal Guidance", desc: "Full transparency and support for documentation, transfers, and compliance.", icon: Scale },
  { title: "Market Analysis", desc: "Data-driven insights so you buy at the right time and the right price.", icon: LineChart },
  { title: "Investment Planning", desc: "Custom portfolios tailored for rental yield and capital appreciation.", icon: Briefcase },
  { title: "Dedicated Support", desc: "From property hunting to final handover — we're with you every step.", icon: Headphones },
];

export function Features() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Why Choose Aitemad</h2>
          <p className="text-blue-100 text-lg">We don't just sell properties; we build relationships based on trust, transparency, and results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm h-full">
                <CardHeader>
                  <f.icon className="w-10 h-10 text-blue-300 mb-4" />
                  <CardTitle className="text-xl text-white font-heading">{f.title}</CardTitle>
                </CardHeader>
                <CardContent><CardDescription className="text-blue-100 text-base">{f.desc}</CardDescription></CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
