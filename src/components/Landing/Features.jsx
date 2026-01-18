import { Truck, ShieldCheck, CreditCard, RotateCcw } from "lucide-react"

const features = [
  { 
    title: "Fast Delivery", 
    desc: "Experience lightning-fast shipping across the globe, right to your doorstep.", 
    icon: <Truck size={24} /> 
  },
  { 
    title: "Secure Payment", 
    desc: "Your transactions are protected by industry-leading encryption standards.", 
    icon: <ShieldCheck size={24} /> 
  },
  { 
    title: "Premium Quality", 
    desc: "Every item in our collection is handpicked and quality-checked for you.", 
    icon: <CreditCard size={24} /> 
  },
  { 
    title: "Easy Returns", 
    desc: "Not satisfied with your purchase? Enjoy a hassle-free 30-day return policy.", 
    icon: <RotateCcw size={24} /> 
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2rem] hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}