"use client"
import { LayoutGrid, Facebook, Twitter, Instagram, Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <LayoutGrid className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                ASSIGN<span className="text-indigo-600">HUB</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              আপনার অ্যাসাইনমেন্ট এবং রিসোর্স ম্যানেজমেন্টকে সহজ করতে আমরা আছি আপনার পাশে। প্রিমিয়াম ডিজাইন এবং ইউজার এক্সপেরিয়েন্স আমাদের অগ্রাধিকার।
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600 transition-colors"><Github size={18} /></a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-4">Platform</h3>
            <ul className="space-y-3">
              {['Home', 'Assignments', 'Resources', 'Pricing'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support */}
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="space-y-4">
            <h3 className="text-slate-900 dark:text-white font-bold">Stay Updated</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">নতুন আপডেট পেতে আমাদের সাবস্ক্রাইব করুন।</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
            © 2026 AssignHub. All rights reserved. Designed with ❤️ for Assignments.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">English (US)</a>
            <a href="#" className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}