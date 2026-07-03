import { motion } from "framer-motion";
import { Counter } from "./Counter";

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm">About Aitemad Marketing</div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight font-heading">A Legacy of Trust in Pakistan's Real Estate.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're a premier Karachi-based real estate advisory firm dedicated to guiding investors and home-buyers through Pakistan's complex property market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to build long-term wealth for our clients by identifying high-yield opportunities, providing transparent legal guidance, and ensuring seamless transactions from discovery to possession.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
              <div><Counter end={1000} suffix="+" /><p className="text-sm text-gray-500 font-medium mt-1">Happy Clients</p></div>
              <div><Counter end={50} suffix="+" /><p className="text-sm text-gray-500 font-medium mt-1">Projects</p></div>
              <div><Counter end={10} suffix="+" /><p className="text-sm text-gray-500 font-medium mt-1">Years Experience</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] max-w-lg mx-auto">
              <img src="/about-office.png" alt="Aitemad Marketing Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-gray-100 hidden sm:block">
              <p className="font-heading font-semibold text-xl text-gray-900 leading-tight">"Our commitment is your peace of mind."</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
                <div><p className="text-sm font-bold text-gray-900">Aitemad Leadership</p><p className="text-xs text-gray-500">Board of Directors</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
