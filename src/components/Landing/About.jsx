export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl group-hover:bg-indigo-500/20 transition duration-500"></div>
        <div className="relative h-[400px] bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
           {/* এখানে একটি রিলেভেন্ট ইমেজ দিতে পারেন */}
           <div className="absolute inset-0 flex items-center justify-center text-slate-400">About Image / Illustration</div>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
          অ্যাসাইনমেন্ট ম্যানেজমেন্টকে আমরা নিয়ে এসেছি <span className="text-indigo-600">নতুন উচ্চতায়</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          আমরা বিশ্বাস করি একটি সুন্দর ইন্টারফেস কাজের গতি বাড়িয়ে দেয়। আমাদের প্ল্যাটফর্মটি বিশেষভাবে ডিজাইন করা হয়েছে যাতে আপনি কোনো ক্লান্তি ছাড়াই দীর্ঘক্ষণ কাজ করতে পারেন।
        </p>
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div>
            <h4 className="text-2xl font-bold text-indigo-600">১০+</h4>
            <p className="text-sm text-slate-500">এক্সপার্ট মডারেটর</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-indigo-600">২৪/৭</h4>
            <p className="text-sm text-slate-500">কাস্টমার সাপোর্ট</p>
          </div>
        </div>
      </div>
    </section>
  )
}