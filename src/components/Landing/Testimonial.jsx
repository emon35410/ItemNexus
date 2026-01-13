export default function Testimonial() {
  return (
    <section className="py-24 bg-indigo-50/50 dark:bg-indigo-950/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((t) => (
          <div key={t} className="p-8 bg-white dark:bg-slate-950 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex text-amber-400 mb-4">{"★".repeat(5)}</div>
            <p className="text-slate-700 dark:text-slate-300 italic mb-6">"অ্যাসাইনমেন্ট গুছিয়ে রাখার জন্য এর চেয়ে সহজ এবং সুন্দর টুলস আমি আগে ব্যবহার করিনি।"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800"></div>
              <div>
                <h4 className="font-bold dark:text-white text-sm">User Name {t}</h4>
                <p className="text-xs text-slate-500">Student, University</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}