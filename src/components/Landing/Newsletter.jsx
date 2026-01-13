import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">নতুন আপডেট মিস করবেন না</h2>
          <p className="text-indigo-100 mb-10 max-w-md mx-auto">আমাদের নিউজলেটারে জয়েন করুন এবং সব রিসোর্স সরাসরি আপনার ইনবক্সে পান।</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-2xl bg-white focus:outline-none text-slate-900"
            />
            <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center gap-2">
              <Mail size={18} /> Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}