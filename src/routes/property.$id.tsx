import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Ruler, Phone } from "lucide-react";

export const Route = createFileRoute("/property/$id")({
  component: PropertyDetail,
});

function PropertyDetail() {
  const { id } = useParams({ from: "/property/$id" });
  const { data, isLoading } = useQuery({
    queryKey: ["property", id],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*, property_images(image_url, sort_order)").eq("id", id).maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  return (
    <SiteLayout>
      <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-5xl">
        {isLoading && <p className="text-center text-gray-500 py-20">Loading...</p>}
        {!isLoading && !data && (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">Property not found.</p>
            <Button asChild><Link to="/properties">Back to Properties</Link></Button>
          </div>
        )}
        {data && (
          <div className="space-y-6">
            {data.property_images?.[0] && (
              <img src={data.property_images[0].image_url} alt={data.title} className="w-full aspect-video object-cover rounded-2xl shadow-lg" />
            )}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">{data.title}</h1>
                <p className="flex items-center gap-2 text-gray-600"><MapPin size={16} />{data.address}, {data.area}, {data.city}</p>
                <p className="text-3xl font-bold text-primary font-heading">PKR {Number(data.price).toLocaleString()}</p>
                <div className="flex gap-6 text-gray-600 pt-4 border-t border-gray-100">
                  {(data.bedrooms ?? 0) > 0 && <span className="flex items-center gap-1"><BedDouble size={18} />{data.bedrooms} Beds</span>}
                  {(data.bathrooms ?? 0) > 0 && <span className="flex items-center gap-1"><Bath size={18} />{data.bathrooms} Baths</span>}
                  {data.size_sqft && <span className="flex items-center gap-1"><Ruler size={18} />{data.size_sqft} sqft</span>}
                </div>
                <p className="text-gray-700 leading-relaxed pt-4 whitespace-pre-line">{data.description}</p>
              </div>
              <aside className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4 h-fit">
                <h3 className="font-bold text-gray-900 font-heading">Contact Owner</h3>
                {data.contact_name && <p className="text-gray-700">{data.contact_name}</p>}
                {data.contact_phone && (
                  <Button asChild className="w-full bg-primary text-white"><a href={`tel:${data.contact_phone}`}><Phone size={16} className="mr-2" />{data.contact_phone}</a></Button>
                )}
                <Button asChild variant="outline" className="w-full"><Link to="/contact">Book a Consultation</Link></Button>
              </aside>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
