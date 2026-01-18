"use client"
import { ShoppingBag, Facebook, Twitter, Instagram, Github, Mail, CreditCard, ShieldCheck } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShoppingBag className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                Item<span className="text-indigo-600">Nexus</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Elevate your lifestyle with our premium collection. We bring quality and style right to your doorstep with an eye-comfort shopping experience.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-all hover:-translate-y-1"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-all hover:-translate-y-1"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-all hover:-translate-y-1"><Github size={20} /></a>
            </div>
          </div>

          {/* 2. Shop Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 uppercase text-xs tracking-widest">Shop Categories</h3>
            <ul className="space-y-4">
              {['Electronics', 'Fashion Wear', 'Home Decor', 'Accessories', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-[2px] bg-indigo-600 mr-0 group-hover:mr-2 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Customer Support */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-6 uppercase text-xs tracking-widest">Customer Care</h3>
            <ul className="space-y-4">
              {['Order Tracking', 'Shipping Policy', 'Returns & Refunds', 'Privacy Policy', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter & Trust */}
          <div className="space-y-6">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-xs text-slate-500 dark:text-slate-500 mb-4">Subscribe to get 10% off your first order!</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
            
            {/* Payment & Security */}
            <div className="pt-2">
              <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600">
                <CreditCard size={28} strokeWidth={1.5} />
                <ShieldCheck size={28} strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-tighter leading-none border-l pl-3 border-slate-200 dark:border-slate-800">
                  100% Secure <br /> Payments
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 <span className="text-indigo-600">ItemNexus</span>. All rights reserved. Designed for Eye-Comfort.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors">Terms</a>
            <a href="#" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-indigo-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}