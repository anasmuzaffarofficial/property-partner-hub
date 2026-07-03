import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, ImagePlus, X } from "lucide-react";

export const Route = createFileRoute("/add-property")({ component: AddPropertyPage });

function AddPropertyPage() {
  const { user, isLoading, openAuthModal } = useAuth();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [form, setForm] = useState({
    title: "", description: "", property_type: "Residential", purpose: "Sale",
    price: "", city: "", area: "", address: "",
    bedrooms: "", bathrooms: "", size_sqft: "",
    contact_name: "", contact_phone: "",
  });

  useEffect(() => { if (!isLoading && !user) { openAuthModal("login"); navigate({ to: "/" }); } }, [isLoading, user, openAuthModal, navigate]);

  if (isLoading || !user) return <SiteLayout><div className="pt-40 pb-20 text-center text-gray-500">Loading...</div></SiteLayout>;

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.city || !form.area || !form.address) { toast.error("Please fill in required fields"); return; }
    setSaving(true);
    const { data: prop, error } = await supabase.from("properties").insert({
      submitted_by: user.id,
      title: form.title, description: form.description || null,
      property_type: form.property_type as any, purpose: form.purpose as any,
      price: Number(form.price), city: form.city, area: form.area, address: form.address,
      bedrooms: form.bedrooms ? Number(form.bedrooms) : 0,
      bathrooms: form.bathrooms ? Number(form.bathrooms) : 0,
      size_sqft: form.size_sqft ? Number(form.size_sqft) : null,
      contact_name: form.contact_name || null, contact_phone: form.contact_phone || null,
    }).select("id").single();
    if (error || !prop) { setSaving(false); toast.error(error?.message ?? "Failed to submit"); return; }

    // Upload files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const path = `${user.id}/${prop.id}/${Date.now()}-${i}-${file.name}`;
      const { error: upErr } = await supabase.storage.from("property-images").upload(path, file, { upsert: false });
      if (!upErr) {
        const { data: pub } = supabase.storage.from("property-images").getPublicUrl(path);
        await supabase.from("property_images").insert({ property_id: prop.id, image_url: pub.publicUrl, sort_order: i });
      }
    }
    setSaving(false); setSubmitted(true);
  };

  if (submitted) {
    return (
      <SiteLayout>
        <div className="pt-40 pb-24 text-center max-w-lg mx-auto px-4">
          <CheckCircle2 className="mx-auto text-primary mb-6" size={64} />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-heading">Submitted for Review</h1>
          <p className="text-gray-600 mb-8">Your listing is pending admin approval. Track its status in My Listings.</p>
          <div className="flex justify-center gap-3">
            <Button onClick={() => navigate({ to: "/my-listings" })}>My Listings</Button>
            <Button variant="outline" onClick={() => navigate({ to: "/" })}>Home</Button>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="pt-32 pb-16 container mx-auto px-4 md:px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-heading">Add Property</h1>
        <Card className="border-gray-100 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={submit} className="space-y-5">
              <div><Label>Title *</Label><Input required className="mt-1.5" value={form.title} onChange={(e) => update("title", e.target.value)} /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Type</Label>
                  <Select value={form.property_type} onValueChange={(v) => update("property_type", v)}>
                    <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                    <SelectContent>{["Residential","Commercial","Plot","Investment"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Purpose</Label>
                  <Select value={form.purpose} onValueChange={(v) => update("purpose", v)}>
                    <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="Sale">Sale</SelectItem><SelectItem value="Rent">Rent</SelectItem></SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>City *</Label><Input required className="mt-1.5" value={form.city} onChange={(e) => update("city", e.target.value)} /></div>
                <div><Label>Area *</Label><Input required className="mt-1.5" value={form.area} onChange={(e) => update("area", e.target.value)} /></div>
              </div>
              <div><Label>Address *</Label><Input required className="mt-1.5" value={form.address} onChange={(e) => update("address", e.target.value)} /></div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div><Label>Price PKR *</Label><Input required type="number" className="mt-1.5" value={form.price} onChange={(e) => update("price", e.target.value)} /></div>
                <div><Label>Size (sqft)</Label><Input type="number" className="mt-1.5" value={form.size_sqft} onChange={(e) => update("size_sqft", e.target.value)} /></div>
                <div />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Bedrooms</Label><Input type="number" className="mt-1.5" value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} /></div>
                <div><Label>Bathrooms</Label><Input type="number" className="mt-1.5" value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} /></div>
              </div>
              <div><Label>Description</Label><Textarea rows={5} className="mt-1.5" value={form.description} onChange={(e) => update("description", e.target.value)} /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Contact Name</Label><Input className="mt-1.5" value={form.contact_name} onChange={(e) => update("contact_name", e.target.value)} /></div>
                <div><Label>Contact Phone</Label><Input className="mt-1.5" value={form.contact_phone} onChange={(e) => update("contact_phone", e.target.value)} /></div>
              </div>
              <div>
                <Label>Photos</Label>
                <div className="mt-2 grid grid-cols-3 gap-3">
                  {files.map((f, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                      <img src={URL.createObjectURL(f)} className="w-full h-full object-cover" alt="" />
                      <button type="button" onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))} className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full text-white flex items-center justify-center"><X size={12} /></button>
                    </div>
                  ))}
                  <label className="aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-primary hover:text-primary">
                    <ImagePlus size={22} /><span className="text-xs mt-1">Add</span>
                    <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => setFiles((prev) => [...prev, ...Array.from(e.target.files ?? [])].slice(0, 10))} />
                  </label>
                </div>
              </div>
              <Button type="submit" disabled={saving} className="w-full h-12 bg-primary text-white hover:bg-primary/90">{saving ? "Submitting..." : "Submit for Review"}</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </SiteLayout>
  );
}
