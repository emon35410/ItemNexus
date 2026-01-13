import { ShieldCheck, Zap, Globe, Layout } from "lucide-react"

const features = [
  { title: "Fast Performance", desc: "Next.js 15 এর মাধ্যমে সুপার ফাস্ট লোডিং স্পিড।", icon: <Zap /> },
  { title: "Eye Comfort", desc: "চোখের আরামের জন্য স্পেশাল ডার্ক মোড সাপোর্ট।", icon: <Layout /> },
  { title: "Secure Data", desc: "আপনার সব ডেটা থাকবে একদম নিরাপদ ও সুরক্ষিত।", icon: <ShieldCheck /> },
  { title: "Global Access", desc: "যেকোনো প্রান্ত থেকে আপনার রিসোর্স অ্যাক্সেস করুন।", icon: <Globe /> },
]

export default function Features() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}