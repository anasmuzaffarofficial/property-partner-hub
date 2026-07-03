import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Real Estate Market Trends in Karachi for 2026", category: "Market Insights", image: "/blog-1.png", date: "Oct 15, 2026", excerpt: "An in-depth analysis of which areas in Karachi are expected to see the highest appreciation in the upcoming year." },
  { title: "The Ultimate Guide to Legal Property Transfers", category: "Legal Advice", image: "/blog-2.png", date: "Sep 28, 2026", excerpt: "Protect your investment by understanding the legal documentation required for buying property in Pakistan." },
  { title: "Commercial vs Residential: Where to Invest?", category: "Investment Strategy", image: "/about-office.png", date: "Sep 10, 2026", excerpt: "Comparing rental yields, capital gains, and maintenance costs between commercial and residential real estate assets." },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12 gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-blue-50 text-primary font-medium rounded-full text-sm mb-3">Blog</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Market Insights</h2>
            <p className="text-gray-600 text-lg mt-2">Stay updated with the latest news, trends, and expert advice.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.title} className="overflow-hidden border-gray-100 hover:shadow-xl transition-all group rounded-2xl">
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">{post.category}</div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3"><Calendar size={14} className="mr-1" />{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary leading-tight font-heading">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm">Read More <ArrowRight size={14} className="ml-1" /></span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
