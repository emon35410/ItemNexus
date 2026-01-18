"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { ShoppingBag, Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast'; // এটি যোগ করতে ভুলবেন না

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // LocalStorage এ ডাটা সেভ করা
    const userData = { fullName, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(userData));

    setTimeout(() => {
      toast.success('Account Created Successfully! 🎉', {
        style: {
          borderRadius: '15px',
          background: '#1e293b', 
          color: '#fff',
        },
      });
      setLoading(false);
      router.push("/login"); 
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-12 mt-10 transition-colors duration-500">
      <div className="max-w-md w-full space-y-8">
        
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/20 mb-6 group transition-transform hover:scale-105">
            <ShoppingBag className="text-white w-8 h-8" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Create an Account
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Start your premium shopping journey with <span className="text-indigo-600 font-bold">ItemNexus</span>
          </p>
        </div>

        <form onSubmit={handleSignUp} className="mt-8 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                name="fullName"
                type="text" 
                required
                placeholder="John Doe"
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                name="email"
                type="email" 
                required
                placeholder="name@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                name="password"
                type={showPassword ? "text" : "password"} 
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all dark:text-white"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-500 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Sign Up"}
            {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400 pt-4">
          Already have an account? {' '}
          <Link href="/login" className="text-indigo-600 font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}