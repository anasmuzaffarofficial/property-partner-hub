import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  { name: "Ahmed Raza", role: "Overseas Investor", city: "Dubai, UAE", quote: "Aitemad Marketing handled my property investment in DHA Karachi with absolute professionalism. Being overseas, I needed someone trustworthy, and they delivered beyond expectations.", rating: 5 },
  { name: "Sarah Khan", role: "Home Buyer", city: "Karachi, Pakistan", quote: "Finding the right apartment seemed daunting until I met the Aitemad team. They understood my budget, showed me verified projects, and made the whole process smooth.", rating: 5 },
  { name: "Tariq Mahmood", role: "Commercial Investor", city: "Lahore, Pakistan", quote: "Their market analysis is spot on. I invested in a retail space they recommended, and the rental yield is exactly what they projected.", rating: 5 },
  { name: "Usman Ali", role: "Property Seller", city: "Karachi, Pakistan", quote: "Sold my villa through Aitemad. They marketed it beautifully, found a genuine buyer quickly, and ensured secure payments. Very transparent dealing.", rating: 5 },
];

export function Testimonials({ title = "What Our Clients Say", subtitle = "Trust earned through transparent dealings and profitable results." }: { title?: string; subtitle?: string } = {}) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 py-4 px-2">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                <Card className="h-full border-0 shadow-lg bg-white rounded-2xl">
                  <CardContent className="p-8">
                    <Quote className="text-primary/20 mb-3" size={32} />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />))}
                    </div>
                    <p className="text-gray-700 text-base italic mb-8">"{t.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{t.name.charAt(0)}</div>
                      <div><h4 className="font-bold text-gray-900">{t.name}</h4><p className="text-sm text-gray-500">{t.role} · {t.city}</p></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
