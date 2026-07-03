import { motion } from "framer-motion";
import { Home, Building2, Landmark, ArrowRight, TrendingUp, Scale, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

const services = [
  { icon: Home, title: "Property Buying Advisory", desc: "Guidance through selection, negotiation, and legal transfer of residential and commercial properties." },
  { icon: Building2, title: "Property Selling Advisory", desc: "Position, price, and market your property to genuine buyers for a secure and profitable sale." },
  { icon: TrendingUp, title: "Investment Planning", desc: "Tailored real estate portfolios built for rental yield and long-term capital appreciation." },
  { icon: Scale, title: "Legal Guidance & Documentation", desc: "Complete legal review, documentation, and transfer support so your investment stays protected." },
  { icon: Landmark, title: "Market Analysis & Reports", desc: "Data-backed market insights on prices, demand, and upcoming projects across Karachi." },
  { icon: Users, title: "Dedicated Client Support", desc: "A single senior advisor stays with you from first call through possession and beyond." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-4">What We Do</div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Real Estate Services Built Around Your Goals</h2>
          <p className="text-lg text-gray-600 mt-4">From first-time buyers to seasoned investors — we cover the full lifecycle of your property decisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
              <Card className="h-full border-gray-100 hover:border-primary hover:shadow-xl transition-all group">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <s.icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  <Link to="/contact" className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
