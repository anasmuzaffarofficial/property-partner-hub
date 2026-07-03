import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiFacebook, SiWhatsapp, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          <div className="space-y-4">
            <img src="/logo-white.jpeg" alt="Aitemad Marketing" className="h-14 rounded" />
            <p className="text-sm text-white/70 leading-relaxed">
              Karachi-based real estate marketing, investment advisory, and property consultancy firm helping investors and homebuyers make confident decisions.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://wa.me/923255822254" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="WhatsApp"><SiWhatsapp size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Facebook"><SiFacebook size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="LinkedIn"><FaLinkedin size={16} /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" aria-label="Instagram"><SiInstagram size={16} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/service" className="hover:text-white">Services</Link></li>
              <li><Link to="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Property Buying Advisory</li>
              <li>Property Selling Advisory</li>
              <li>Investment Planning</li>
              <li>Legal Guidance</li>
              <li>Market Analysis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>Head Office, Karachi, Pakistan</span></li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0" /><a href="tel:+923255822254" className="hover:text-white">+92 325 5822254</a></li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0" /><a href="mailto:info@aitemad.com" className="hover:text-white">info@aitemad.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Aitemad Marketing. All rights reserved.</p>
          <p>Real Estate Advisory · Investment · Consultancy</p>
        </div>
      </div>
    </footer>
  );
}
