import { SiWhatsapp } from "react-icons/si";
import { Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a href="https://wa.me/923255822254" target="_blank" rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp">
        <SiWhatsapp size={26} />
      </a>
      <a href="tel:+923255822254"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Call us">
        <Phone size={22} />
      </a>
    </div>
  );
}
