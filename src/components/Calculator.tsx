import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator as CalcIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function Calculator() {
  const [investment, setInvestment] = useState(5000000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  const projected = useMemo(() => investment * Math.pow(1 + rate / 100, years), [investment, years, rate]);
  const profit = projected - investment;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-12 text-white space-y-6">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center"><CalcIcon size={26} /></div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading">Investment Growth Calculator</h2>
              <p className="text-blue-100">Get a quick projection of what a real estate investment could look like at expected annual appreciation.</p>
              <div className="space-y-5 pt-4">
                <div>
                  <div className="flex justify-between mb-2 text-sm"><Label className="text-white/80">Investment (PKR)</Label><span className="font-semibold">{investment.toLocaleString()}</span></div>
                  <Input type="number" value={investment} onChange={(e) => setInvestment(Number(e.target.value))} className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm"><Label className="text-white/80">Years</Label><span className="font-semibold">{years} yrs</span></div>
                  <Slider value={[years]} onValueChange={([v]) => setYears(v)} min={1} max={20} />
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm"><Label className="text-white/80">Expected Annual Return</Label><span className="font-semibold">{rate}%</span></div>
                  <Slider value={[rate]} onValueChange={([v]) => setRate(v)} min={5} max={25} />
                </div>
              </div>
            </div>
            <div className="bg-white p-10 md:p-12 flex flex-col justify-center">
              <motion.div key={projected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Projected Value</p>
                <p className="text-4xl md:text-5xl font-bold text-primary font-heading">PKR {Math.round(projected).toLocaleString()}</p>
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="flex justify-between text-sm text-gray-600"><span>Initial Investment</span><span className="font-semibold">PKR {investment.toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm text-gray-600"><span>Estimated Profit</span><span className="font-semibold text-primary">PKR {Math.round(profit).toLocaleString()}</span></div>
                  <div className="flex justify-between text-sm text-gray-600"><span>Period</span><span className="font-semibold">{years} Years</span></div>
                </div>
                <p className="text-xs text-gray-400">*Indicative projection. Actual returns depend on location, project, and market cycles.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
