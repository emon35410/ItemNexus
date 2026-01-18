import { Star, Quote } from "lucide-react";

const reviews = [
  { id: 1, name: "Alex Johnson", role: "Verified Buyer", text: "The quality of the headphones I ordered exceeded my expectations. Fast delivery too!", rating: 5 },
  { id: 2, name: "Maria Garcia", role: "Fashion Enthusiast", text: "ItemNexus has the best minimalist collection. Their website interface is so easy on the eyes.", rating: 5 },
  { id: 3, name: "David Chen", role: "Tech Reviewer", text: "Secure payment and great customer support. I had a small issue and they fixed it instantly.", rating: 4 },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black dark:text-white mb-4">What Our Customers Say</h2>
        <p className="text-slate-500 mb-16">Thousands of happy shoppers trust ItemNexus for their daily needs.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="p-8 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] text-left relative group hover:bg-white dark:hover:bg-slate-900 transition-all duration-300">
              <Quote className="absolute top-8 right-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-4 text-amber-400">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6 italic leading-relaxed">"{rev.text}"</p>
              
              <div>
                <h4 className="font-bold dark:text-white">{rev.name}</h4>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}