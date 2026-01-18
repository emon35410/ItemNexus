"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, LayoutGrid, LogOut, User, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-indigo-500/20 shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <LayoutGrid className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tight text-slate-900 dark:text-white">
              Item<span className="text-indigo-600">Nexus</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4">
            {['Home', 'Products', 'About'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {session ? (
              <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-900 rounded-full `max-w-37.5`">
                  <User size={14} className="text-indigo-600 shrink-0" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">
                    {session.user?.name || session.user?.email?.split('@')[0]}
                  </span>
                </div>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="p-2.5 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-all"
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login" className="text-sm font-bold text-slate-700 dark:text-slate-300 px-4 py-2.5 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-xl transition-all">
                  Login
                </Link>
                <Link href="/signup" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-indigo-500/20 transition-all">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Right Side (Theme + Menu) */}
          <div className="md:hidden  flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-900 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
  fixed inset-0 top-16 z-40 md:hidden bg-white dark:bg-slate-950 transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "translate-x-full"}
`}>
        <div className="flex flex-col h-full p-6 space-y-6">

          {/* Navigation Links with Background Card */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 mb-3">
              Navigation
            </p>

            {/* Background Container for Links */}
            <div className="bg-slate-50/80 dark:bg-slate-900/50 p-2 rounded-3xl border border-slate-100 dark:border-slate-800/50">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
                { name: 'About', href: '/about' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block p-4 text-base font-bold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Section */}
          <div className="pt-2">
            {session ? (
              <div className="space-y-4">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 mb-1">Account</p>
                <div className="flex items-center gap-3 p-4 bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100/50 dark:border-indigo-900/30 rounded-3xl">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                    <User size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-bold dark:text-white truncate">{session.user?.name}</p>
                    <p className="text-xs text-slate-500 truncate">{session.user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => { signOut(); setIsOpen(false); }}
                  className="w-full py-4 bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 font-bold rounded-2xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-4 mb-1">Get Started</p>
                <div className="grid grid-cols-1 gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-center font-bold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl dark:text-white active:scale-[0.98] transition-transform"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-center bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 active:scale-[0.98] transition-transform"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}