import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function PropertyFinder() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [type, setType] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("");

  const submit = () => {
    navigate({
      to: "/properties",
      search: { city: city || undefined, type: type || undefined, purpose: purpose || undefined } as any,
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Property Finder</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Find Your Next Property</h2>
        </div>
        <div className="max-w-5xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="City (e.g. Karachi)" value={city} onChange={(e) => setCity(e.target.value)} className="bg-white h-12" />
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="bg-white h-12"><SelectValue placeholder="Property Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Residential">Residential</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Plot">Plot</SelectItem>
                <SelectItem value="Investment">Investment</SelectItem>
              </SelectContent>
            </Select>
            <Select value={purpose} onValueChange={setPurpose}>
              <SelectTrigger className="bg-white h-12"><SelectValue placeholder="Buy or Rent" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Sale">Buy</SelectItem>
                <SelectItem value="Rent">Rent</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={submit} className="h-12 bg-primary text-white hover:bg-primary/90 gap-2"><Search size={16} />Search Properties</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
