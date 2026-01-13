export default function Pricing() {
  const plans = [
    { name: "Starter", price: "0", feat: ["5 Projects", "Basic Support", "Public Link"] },
    { name: "Professional", price: "29", feat: ["Unlimited Projects", "Priority Support", "Private Link"], popular: true },
    { name: "Enterprise", price: "99", feat: ["Custom Branding", "Dedicated Manager", "Team Access"] },
  ]

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 dark:text-white">Simple & Transparent Pricing</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={`p-10 rounded-[2.5rem] border ${plan.popular ? 'bg-indigo-600 border-indigo-600 text-white shadow-2xl shadow-indigo-500/20 scale-105' : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 dark:text-white'}`}>
            <h3 className="text-lg font-bold mb-4 opacity-80">{plan.name}</h3>
            <div className="text-5xl font-black mb-8">${plan.price}<span className="text-sm font-normal">/mo</span></div>
            <ul className="space-y-4 mb-10 text-sm">
              {plan.feat.map((f, idx) => <li key={idx} className="flex items-center gap-2">✓ {f}</li>)}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-black transition-all active:scale-95 ${plan.popular ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}