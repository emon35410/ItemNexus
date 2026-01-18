"use client"
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative pt-15 pb-10 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      
      {/* 1. New Launch Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800/50 animate-pulse">
        <Sparkles size={16} />
        <span>New Winter Collection 2026 is Live!</span>
      </div>

      {/* 2. Main Headline */}
      <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
        Elevate Your Style <br />
        With <span className="text-indigo-600">ItemNexus</span>
      </h1>

      {/* 3. Sub-text (E-commerce Focused) */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-12 leading-relaxed">
        Discover premium quality products, unbeatable prices, and lightning-fast delivery—all in one place. Explore our curated catalog and find your next favorite item today.
      </p>

      {/* 4. Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
        <Link href="/products">
          <button className="w-full sm:w-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-2xl shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group active:scale-95">
            <ShoppingBag size={15} />
            Shop Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        
        <Link href="#categories-section">
          <button className="w-full sm:w-auto px-5 py-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
            View Categories
          </button>
        </Link>
      </div>

      {/* 5. Trust Signals */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 dark:text-slate-600 font-bold text-sm uppercase tracking-widest">
        <span>✓ Free Shipping</span>
        <span>✓ Secure Payment</span>
        <span>✓ 24/7 Customer Support</span>
      </div>

    </section>
  )
}