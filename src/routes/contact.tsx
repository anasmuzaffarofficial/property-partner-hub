import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SiteLayout } from "@/components/SiteLayout";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aitemad Marketing — Book a Free Consultation" },
      { name: "description", content: "Call, WhatsApp, or email Aitemad Marketing. Book a free real estate consultation in Karachi within 24 hours." },
      { property: "og:title", content: "Contact Aitemad Marketing" },
      { property: "og:description", content: "Free consultation. Response within 24 hours." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Phone, title: "Call Us", desc: "Talk to a senior advisor now.", cta: "+92 325 5822254", href: "tel:+923255822254", color: "bg-blue-50 text-primary" },
  { icon: SiWhatsapp, title: "WhatsApp Us", desc: "Quick questions, quick answers.", cta: "Chat on WhatsApp", href: "https://wa.me/923255822254", color: "bg-green-50 text-green-600" },
  { icon: Mail, title: "Email Us", desc: "Detailed queries or documentation.", cta: "info@aitemad.com", href: "mailto:info@aitemad.com", color: "bg-amber-50 text-amber-600" },
];

const officeHours = [
  { day: "Monday – Thursday", hours: "10:00 AM – 7:00 PM" },
  { day: "Friday", hours: "10:00 AM – 12:30 PM · 3:00 PM – 7:00 PM" },
  { day: "Saturday", hours: "11:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "By Appointment Only" },
];

const reassurance = [
  { icon: CheckCircle2, text: "We respond to every inquiry within 24 hours." },
  { icon: CheckCircle2, text: "Your details stay private — we never share client data." },
  { icon: CheckCircle2, text: "First consultation is always free — no obligation." },
  { icon: CheckCircle2, text: "You get a senior advisor, not a call-center agent." },
];

function ContactPage() {
  return (
    <SiteLayout>
      {/* 1. Hero */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium">Contact</div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">Let's Talk About Your Next Move</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">Buying, selling, or investing — start with a free, no-pressure conversation with a senior advisor.</p>
          </motion.div>
        </div>
      </section>

      {/* 2. Form + Office */}
      <ConsultationForm heading="Send Us a Message" subheading="Tell us about your property goals. We reply within 24 hours." />

      {/* 3. Embedded Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Visit Our Office</h2>
            <p className="text-gray-600 mt-2">Head Office · Karachi, Pakistan</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-6xl mx-auto">
            <iframe
              title="Aitemad Marketing Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115901.9803033604!2d67.02297285!3d24.8607343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0, filter: "grayscale(50%) contrast(105%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. Multiple Ways to Reach Us */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Reach Us Any Way You Like</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {channels.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-gray-100 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-14 h-14 mx-auto rounded-full ${c.color} flex items-center justify-center`}><c.icon size={26} /></div>
                    <h3 className="text-xl font-bold text-gray-900 font-heading">{c.title}</h3>
                    <p className="text-gray-600 text-sm">{c.desc}</p>
                    <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                      <a href={c.href}>{c.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Office Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3"><Clock size={14} /> Office Hours</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">When We're Available</h2>
          </div>
          <Card className="border-gray-100 shadow-sm">
            <CardContent className="p-6 md:p-8 divide-y divide-gray-100">
              {officeHours.map((h) => (
                <div key={h.day} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                  <span className="font-semibold text-gray-900 font-heading">{h.day}</span>
                  <span className="text-primary font-medium text-sm md:text-base">{h.hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. What Happens After You Submit */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">What Happens After You Submit</h2>
            <p className="text-blue-100 text-lg mt-3">No black holes — here's exactly what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {reassurance.map((r) => (
              <div key={r.text} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                <r.icon className="text-blue-300 mt-0.5 shrink-0" size={20} />
                <p className="text-blue-50">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
