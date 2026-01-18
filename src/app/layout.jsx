import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { Toaster } from "react-hot-toast"; // ১. টোস্টার ইম্পোর্ট করুন

export const metadata = {
  title: "ItemNexus",
  description: "Next.js 15 & Tailwind v4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-indigo-100 selection:text-indigo-900">
        <AuthProvider> 
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
           
            <Toaster 
              position="top-center" 
              reverseOrder={false} 
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#1e293b', 
                  color: '#fff',
                  borderRadius: '12px',
                }
              }}
            />
            <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}