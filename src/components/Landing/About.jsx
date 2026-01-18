import Image from "next/image"; 

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Visual Side */}
      <div className="relative group">
        {/* Glow Effect behind the image */}
        <div className="absolute -inset-4 bg-indigo-500/10 rounded-[2.5rem] blur-2xl group-hover:bg-indigo-500/20 transition duration-700"></div>
        
        {/* Container for Image */}
        <div className="relative h-[450px] w-full bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" 
            alt="ItemNexus Shopping Experience"
            fill // এটি ইমেজকে অটোমেটিক কন্টেইনারের সাইজে ফিট করবে
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority // উপরের দিকের সেকশন বলে দ্রুত লোড হওয়ার জন্য প্রpriority দেয়া হয়েছে
          />
          
          {/* Subtle Overlay for better eye comfort in Dark Mode */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Content Side */}
      <div className="space-y-8">
        <div className="space-y-4">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-sm uppercase">
            Our Story
          </span>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-[1.15]">
            Redefining Your <br />
            <span className="text-indigo-600">Shopping Experience</span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            At ItemNexus, we believe that quality should be accessible to everyone. 
            We meticulously curate our collection to ensure every item meets the 
            highest standards of craftsmanship and style.
          </p>
          
          <p className="text-slate-500 dark:text-slate-500 text-sm italic">
            `Designed with an eye-comfort interface, browsing our store is as relaxing as it is rewarding.`
          </p>
        </div>

        {/* E-commerce Stats with Dividers */}
        <div className="flex gap-12 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="space-y-1">
            <h4 className="text-4xl font-black text-indigo-600">50k+</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Happy Customers</p>
          </div>
          <div className="w-px bg-slate-200 dark:bg-slate-800 h-12 self-center"></div>
          <div className="space-y-1">
            <h4 className="text-4xl font-black text-indigo-600">99%</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Positive Reviews</p>
          </div>
        </div>

      </div>
    </section>
  )
}