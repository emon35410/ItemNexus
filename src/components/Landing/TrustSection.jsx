import { ShieldCheck, Truck, Headphones, Eye } from "lucide-react";

const reasons = [
  {
    title: "Secure Checkout",
    desc: "Your data is protected by 256-bit SSL encryption for a safe shopping experience.",
    icon: <ShieldCheck className="text-emerald-500" />,
    bg: "bg-emerald-50 dark:bg-emerald-900/10"
  },
  {
    title: "Eye-Comfort UI",
    desc: "Specifically designed dark mode and soft colors to protect your eyes during night shopping.",
    icon: <Eye className="text-indigo-500" />,
    bg: "bg-indigo-50 dark:bg-indigo-900/10"
  },
  {
    title: "Fast Global Shipping",
    desc: "We partner with top logistics to ensure your package arrives within 3-5 business days.",
    icon: <Truck className="text-blue-500" />,
    bg: "bg-blue-50 dark:bg-blue-900/10"
  },
  {
    title: "24/7 Expert Support",
    desc: "Our dedicated team is always here to help you with any questions or issues.",
    icon: <Headphones className="text-rose-500" />,
    bg: "bg-rose-50 dark:bg-rose-900/10"
  }
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/10 border-y border-slate-100 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-start space-y-4 group">
              <div className={`w-14 h-14 ${reason.bg} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold dark:text-white">
                {reason.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}