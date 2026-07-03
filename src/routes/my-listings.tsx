import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/my-listings")({ component: MyListings });

function MyListings() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if (!isLoading && !user) navigate({ to: "/" }); }, [isLoading, user, navigate]);

  const { data } = useQuery({
    queryKey: ["my-listings", user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase.from("properties").select("*, property_images(image_url)").eq("submitted_by", user.id).order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const statusColor = (s: string) => s === "approved" ? "bg-green-100 text-green-700" : s === "rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700";

  return (
    <SiteLayout>
      <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">My Listings</h1>
          <Button asChild className="bg-primary text-white"><Link to="/add-property">Add Property</Link></Button>
        </div>
        {!data?.length && <p className="text-gray-500 text-center py-16">You haven't submitted any properties yet.</p>}
        <div className="grid md:grid-cols-2 gap-6">
          {data?.map((p: any) => (
            <Card key={p.id} className="border-gray-100">
              <CardContent className="p-4 flex gap-4">
                {p.property_images?.[0] && <img src={p.property_images[0].image_url} className="w-28 h-28 rounded object-cover" alt="" />}
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-gray-900 font-heading line-clamp-1">{p.title}</h3>
                    <Badge className={statusColor(p.status)}>{p.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{p.area}, {p.city}</p>
                  <p className="text-primary font-bold">PKR {Number(p.price).toLocaleString()}</p>
                  {p.status === "approved" && <Link to="/property/$id" params={{ id: p.id }} className="text-sm text-primary hover:underline">View public listing →</Link>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
