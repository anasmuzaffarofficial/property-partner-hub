import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1).max(2000),
});

export function ConsultationForm({ heading = "Ready to Invest? Let's Talk.", subheading = "Schedule a free, no-obligation consultation with our senior property advisors." }: { heading?: string; subheading?: string } = {}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.errors[0]?.message ?? "Invalid input"); return; }
    setSubmitting(true);
    const { error } = await supabase.from("consultations").insert(parsed.data);
    setSubmitting(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Thanks! We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="bg-primary text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight">{heading}</h2>
              <p className="text-blue-100 text-lg leading-relaxed max-w-md">{subheading}</p>
            </div>
            <div className="space-y-6 pt-8 border-t border-white/10">
              {[
                { icon: MapPin, title: "Head Office", body: "Karachi, Pakistan" },
                { icon: Phone, title: "Call Us", body: "+92 325 5822254" },
                { icon: Mail, title: "Email Us", body: "info@aitemad.com" },
              ].map((c) => (
                <div key={c.title} className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 shrink-0"><c.icon className="text-blue-300" /></div>
                  <div><h4 className="text-lg font-semibold">{c.title}</h4><p className="text-blue-100 text-sm">{c.body}</p></div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={submit} className="w-full lg:w-7/12 bg-white rounded-2xl p-8 md:p-10 text-gray-900 space-y-4 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label>Name</Label><Input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="mt-1.5" /></div>
              <div><Label>Email</Label><Input required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="mt-1.5" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="mt-1.5" /></div>
              <div><Label>Subject</Label><Input value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} className="mt-1.5" /></div>
            </div>
            <div><Label>Message</Label><Textarea required rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="mt-1.5" /></div>
            <Button type="submit" disabled={submitting} className="w-full h-12 bg-primary text-white hover:bg-primary/90 gap-2">
              <Send size={16} /> {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
