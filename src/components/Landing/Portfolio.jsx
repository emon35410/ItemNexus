export default function Portfolio() {
  const projects = [1, 2, 3]
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 dark:text-white">Our Recent Projects</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p} className="group bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="h-52 bg-slate-100 dark:bg-slate-900 relative">
                <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors"></div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Case Study</span>
                <h3 className="text-xl font-bold mt-2 mb-3 dark:text-white">Creative Project {p}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">একটি প্রফেশনাল অ্যাসাইনমেন্টের নিখুঁত উদাহরণ এটি।</p>
                <button className="text-sm font-black flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                  VIEW DETAILS <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}