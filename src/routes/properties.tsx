import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, BedDouble, Bath, Ruler, ShieldCheck, PhoneCall, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Browse Verified Properties — Aitemad Marketing" },
      { name: "description", content: "Browse verified residential, commercial, plot, and investment properties across Pakistan." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [city, setCity] = useState("");
  const [type, setType] = useState<string>("all");
  const [purpose, setPurpose] = useState<string>("all");

  const { data, isLoading } = useQuery({
    queryKey: ["properties", city, type, purpose],
    queryFn: async () => {
      let q = supabase.from("properties").select("*, property_images(image_url, sort_order)").eq("status", "approved").order("created_at", { ascending: false });
      if (city) q = q.ilike("city", `%${city}%`);
      if (type !== "all") q = q.eq("property_type", type as any);
      if (purpose !== "all") q = q.eq("purpose", purpose as any);
      const { data, error } = await q;
      if (error) throw error;
      return data;
    },
  });

  const items = data ?? [];

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-40 pb-14 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold font-heading">Browse Verified Properties Across Pakistan</h1>
          <p className="text-blue-100 mt-3 text-lg">Every listing on Aitemad is title-checked before it appears here.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6 text-sm text-white/90">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-blue-200" /> Verified Listings Only</span>
            <span className="flex items-center gap-2"><PhoneCall size={16} className="text-blue-200" /> Direct Owner Contact</span>
            <span className="flex items-center gap-2"><BadgeCheck size={16} className="text-blue-200" /> No Hidden Fees</span>
          </div>
        </div>
      </section>

      <main className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="mb-8 border-gray-100 shadow-sm">
            <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue placeholder="Property Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Plot">Plot</SelectItem>
                  <SelectItem value="Investment">Investment</SelectItem>
                </SelectContent>
              </Select>
              <Select value={purpose} onValueChange={setPurpose}>
                <SelectTrigger><SelectValue placeholder="Buy or Rent" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Buy or Rent</SelectItem>
                  <SelectItem value="Sale">Buy</SelectItem>
                  <SelectItem value="Rent">Rent</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={() => { setCity(""); setType("all"); setPurpose("all"); }}>Clear Filters</Button>
            </CardContent>
          </Card>

          {isLoading && <p className="text-center text-gray-500 py-20">Loading properties...</p>}
          {!isLoading && items.length === 0 && (
            <div className="text-center py-20 text-gray-500 text-lg">No properties match your search criteria yet.</div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p: any) => {
              const img = p.property_images?.[0]?.image_url;
              return (
                <Link key={p.id} to="/property/$id" params={{ id: p.id }}>
                  <Card className="overflow-hidden border-gray-100 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full">
                    <div className="relative h-52 bg-gray-100">
                      {img ? <img src={img} alt={p.address} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>}
                      <Badge className="absolute top-3 left-3 bg-primary text-white">{p.purpose === "Sale" ? "For Sale" : "For Rent"}</Badge>
                    </div>
                    <CardContent className="p-5 space-y-3">
                      <p className="text-xl font-bold text-primary font-heading">PKR {Number(p.price).toLocaleString()}</p>
                      <p className="text-gray-900 font-semibold line-clamp-1">{p.title}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1.5"><MapPin size={14} />{p.area}, {p.city}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 pt-2 border-t border-gray-100">
                        {(p.bedrooms ?? 0) > 0 && <span className="flex items-center gap-1"><BedDouble size={14} />{p.bedrooms}</span>}
                        {(p.bathrooms ?? 0) > 0 && <span className="flex items-center gap-1"><Bath size={14} />{p.bathrooms}</span>}
                        {p.size_sqft && <span className="flex items-center gap-1"><Ruler size={14} />{p.size_sqft} sqft</span>}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2">Can't find what you're looking for?</h2>
            <p className="text-blue-100 mb-6">Book a free consultation and we'll shortlist verified properties that fit your brief.</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
