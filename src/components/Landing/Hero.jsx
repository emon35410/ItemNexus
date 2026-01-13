export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 dark:bg-indigo-900/30 rounded-full">
        New Version 4.0 is Live
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
        Manage Your <span className="text-indigo-600">Assignments</span> <br /> 
        With High Efficiency
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
        আমাদের প্ল্যাটফর্মে আপনার সব অ্যাসাইনমেন্ট গুছিয়ে রাখুন। চোখের আরামদায়ক ডার্ক মোড এবং প্রিমিয়াম ইউজার ইন্টারফেস আপনার কাজকে করবে আরও আনন্দময়।
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 transition-all">
          Get Started Free
        </button>
        <button className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-50 transition-all">
          View Demo
        </button>
      </div>
    </section>
  )
}