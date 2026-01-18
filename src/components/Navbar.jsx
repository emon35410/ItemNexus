"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, LayoutGrid, LogOut, User } from "lucide-react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md bg-opacity-80 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <LayoutGrid className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black text-slate-900 dark:text-white">
              Item<span className="text-indigo-600">Nexus</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/products" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">Products</Link>
            <Link href="/about" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all mr-2"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {session ? (
              <div className="flex items-center gap-4 border-l pl-4 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-full">
                  <div className="w-6 h-6 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600">
                    <User size={14} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                    {session.user.name || session.user.email?.split('@')[0]}
                  </span>
                </div>
                
                <button 
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 text-sm font-bold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm font-bold text-slate-700 dark:text-slate-300 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-all">
                  Login
                </Link>
                <Link href="/signup" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-full shadow-md transition-all">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-lg">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 transition-all">
          <div className="flex flex-col gap-3">
            <Link href="/products" onClick={() => setIsOpen(false)} className="block py-2 font-bold dark:text-white">Products</Link>
            
            {session ? (
              <button 
                onClick={() => { signOut(); setIsOpen(false); }}
                className="w-full py-3 text-center bg-rose-50 dark:bg-rose-900/20 text-rose-500 font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <LogOut size={18} /> Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="block py-3 text-center font-bold border border-slate-200 dark:border-slate-800 rounded-xl dark:text-white">Login</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="block py-3 text-center bg-indigo-600 text-white font-bold rounded-xl">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}