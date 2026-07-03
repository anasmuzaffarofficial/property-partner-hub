import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const defaultFaqs = [
  { q: "How does Aitemad Marketing verify a property listing?", a: "Every property goes through a legal and title check by our advisory team before publishing. We only market listings with clear ownership documents." },
  { q: "Do you charge upfront consultation fees?", a: "No. Initial consultations are free. We only invoice on successful transactions or a small documentation fee where clearly stated." },
  { q: "Can overseas Pakistanis invest through Aitemad?", a: "Yes. We regularly work with overseas investors and handle site visits, documentation, and remittance guidance end-to-end." },
  { q: "Do you help with home loans and bank financing?", a: "Yes. We introduce clients to partner banks and help package the paperwork for the smoothest possible approval." },
  { q: "How long does a typical property purchase take?", a: "For ready properties, typically 2–4 weeks including token, agreement, payments, and transfer. Larger investments may take longer." },
  { q: "Do you offer property management after purchase?", a: "Yes — including tenant sourcing, rent collection, and maintenance coordination for investor portfolios." },
];

export function FAQ({ faqs = defaultFaqs, title = "Frequently Asked Questions", subtitle = "Answers to what buyers, sellers, and investors ask us most." }: { faqs?: { q: string; a: string }[]; title?: string; subtitle?: string } = {}) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary py-5 font-heading">{f.q}</AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
