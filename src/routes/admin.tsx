import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/SiteLayout";
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({ component: AdminPage });

function AdminPage() {
  const { user, isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();
  const qc = useQueryClient();
  useEffect(() => { if (!isLoading && (!user || !isAdmin)) navigate({ to: "/" }); }, [isLoading, user, isAdmin, navigate]);

  const { data } = useQuery({
    queryKey: ["admin-properties"],
    queryFn: async () => {
      const { data, error } = await supabase.from("properties").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
    enabled: !!user && isAdmin,
  });

  const setStatus = async (id: string, status: "approved" | "rejected") => {
    const { error } = await supabase.from("properties").update({ status }).eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success(`Property ${status}`); qc.invalidateQueries({ queryKey: ["admin-properties"] }); }
  };

  const statusColor = (s: string) => s === "approved" ? "bg-green-100 text-green-700" : s === "rejected" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700";

  return (
    <SiteLayout>
      <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-8">Admin Dashboard</h1>
        <div className="space-y-4">
          {data?.map((p: any) => (
            <Card key={p.id} className="border-gray-100">
              <CardContent className="p-5 flex items-center justify-between gap-4 flex-col md:flex-row">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900 font-heading">{p.title}</h3>
                    <Badge className={statusColor(p.status)}>{p.status}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{p.property_type} · {p.purpose} · {p.area}, {p.city}</p>
                  <p className="text-primary font-bold">PKR {Number(p.price).toLocaleString()}</p>
                </div>
                <div className="flex gap-2">
                  {p.status !== "approved" && <Button size="sm" onClick={() => setStatus(p.id, "approved")} className="bg-green-600 text-white hover:bg-green-700">Approve</Button>}
                  {p.status !== "rejected" && <Button size="sm" variant="outline" onClick={() => setStatus(p.id, "rejected")}>Reject</Button>}
                </div>
              </CardContent>
            </Card>
          ))}
          {!data?.length && <p className="text-center text-gray-500 py-16">No properties yet.</p>}
        </div>
      </div>
    </SiteLayout>
  );
}
