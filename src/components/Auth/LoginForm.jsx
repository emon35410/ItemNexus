"use client";
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

        const isMockAdmin = email === "admin@nexus.com" && password === "123456";
        const isRegisteredUser = savedUser && savedUser.email === email && savedUser.password === password;

        if (isMockAdmin || isRegisteredUser) {
            const result = await signIn("credentials", {
                email,
                password,
                name: isMockAdmin ? "Admin" : savedUser.fullName,
                redirect: false,
            });

            if (result?.error) {
                setError("Authentication failed!");
                setLoading(false);
            } else {
                router.push("/products");
            }
        } else {
            setError("Invalid email or password!");
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen pt-32 pb-16 flex items-center justify-center px-6 bg-slate-50 dark:bg-slate-950 transition-colors'>
            <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-2xl">
                <h2 className="text-2xl font-black mb-6 dark:text-white text-center">Login</h2>
                {/* Demo Credentials Box */}
                <div className="mb-8 p-4 bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest font-black text-indigo-600 dark:text-indigo-400 mb-2">Demo Admin Access</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500">Email:</span>
                            <code className="font-mono font-bold text-slate-900 dark:text-indigo-200">admin@nexus.com</code>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500">Pass:</span>
                            <code className="font-mono font-bold text-slate-900 dark:text-indigo-200">123456</code>
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="mb-4 p-3 text-sm text-rose-500 bg-rose-50 dark:bg-rose-900/10 border border-rose-200 dark:border-rose-800 rounded-xl text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-5 py-3 rounded-xl border dark:bg-slate-950 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        className="w-full px-5 py-3 rounded-xl border dark:bg-slate-950 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                    <div className="relative flex items-center justify-center my-6">
                        <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                        <span className="absolute px-4 bg-white dark:bg-slate-900 text-xs text-slate-400 uppercase">Or</span>
                    </div>



                    <p className='text-center text-sm text-slate-600 dark:text-slate-400 mt-6'>
                        Don&apos;t have an account? <Link href="/signup" className="text-indigo-600 font-bold hover:underline">Register</Link>
                    </p>
                </form>

            </div>

        </div>
    );
}