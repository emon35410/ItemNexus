import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ItemNexus",
  description: "Next.js 15 & Tailwind v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-indigo-100 selection:text-indigo-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
           <Navbar></Navbar>
           <main>{children}</main>
           <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}