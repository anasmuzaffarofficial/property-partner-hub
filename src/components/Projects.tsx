import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const projectsData = [
  { id: 1, name: "Marina Bay Residences", location: "DHA Phase 8, Karachi", category: "Residential", image: "/project-1.png", status: "Under Construction", plan: "4 Years Plan" },
  { id: 2, name: "Business Hub Tower", location: "Shahrah-e-Faisal, Karachi", category: "Commercial", image: "/project-2.png", status: "Ready Possession", plan: "Lump Sum" },
  { id: 3, name: "Green Valley Villas", location: "Bahria Town, Karachi", category: "Residential", image: "/project-3.png", status: "Ready to Move", plan: "Easy Installments" },
  { id: 4, name: "Pearl Heights", location: "Clifton, Karachi", category: "Investment", image: "/project-4.png", status: "Pre-Launch", plan: "3 Years Plan" },
  { id: 5, name: "Emaar Coral Villas", location: "DHA Phase 8 Ext, Karachi", category: "Residential", image: "/project-5.png", status: "Completed", plan: "Cash / Bank Finance" },
  { id: 6, name: "Clifton Commercial Plaza", location: "Clifton Block 4, Karachi", category: "Commercial", image: "/project-6.png", status: "Nearing Completion", plan: "2 Years Plan" },
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projectsData : projectsData.filter((p) => p.category === filter);
  const tabs = ["All", "Residential", "Commercial", "Investment"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Featured Projects</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Handpicked Investment Opportunities</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button key={t} onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === t ? "bg-primary text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
              <Card className="overflow-hidden border-gray-100 hover:shadow-2xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <Badge className="absolute top-3 left-3 bg-primary text-white">{p.category}</Badge>
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 font-heading">{p.name}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1"><MapPin size={14} />{p.location}</p>
                  <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100 mt-3">
                    <span>{p.status}</span><span className="text-primary font-medium">{p.plan}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/properties">View All Properties <ArrowRight className="ml-2" size={16} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
