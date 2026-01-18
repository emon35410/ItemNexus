"use client";
import React, { useState, useEffect } from 'react'
import { ShoppingCart, Star, Eye, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast' // ১. টোস্ট ইমপোর্ট করুন

export default function Trending() {
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch('https://item-nexus-server.vercel.app/products?limit=4');
        const data = await res.json();
        setRecentProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Recent products fetch error:", error);
        setLoading(false);
      }
    };
    fetchRecent();
  }, []);

  const handleAddToCart = () => {
    toast.success(` added to cart!`, {
      style: {
        borderRadius: '16px',
        background: '#333',
        color: '#fff',
      },
      duration: 2000,
    });
  }

  if (loading) return (
    <div className="py-24 text-center dark:bg-slate-950 dark:text-white transition-colors duration-500 font-medium animate-pulse">
      Loading Trends...
    </div>
  );

  return (
    <section className="py-14 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Part */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-xs uppercase bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full">
              Top Picks
            </span>
            <h2 className="text-3xl md:text-4xl font-black dark:text-white">Trending Now</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md">Discover our most popular products this season.</p>
          </div>
          <Link href="/products" className="group">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-slate-100 dark:border-slate-800 rounded-2xl font-bold dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
              View All Items
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-slate-50/50 dark:bg-slate-900/30 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              
              <div className="relative h-72 w-full overflow-hidden bg-white dark:bg-slate-800">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-4 right-4 flex flex-col gap-2 md:translate-x-12 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 opacity-100 translate-x-0 transition-all duration-300 z-10">
                  <Link href={`/products/${product.id}`}>
                    <button className="p-3.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl text-slate-900 dark:text-white hover:bg-indigo-600 hover:text-white transition-all active:scale-90">
                      <Eye size={20} />
                    </button>
                  </Link>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-xl shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-bold text-lg dark:text-white leading-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-lg">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold ml-1">4.5</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-medium">Price</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">
                      ${product.price}
                    </span>
                  </div>
                  
                  {/* Cart Button with Toast */}
                  <button 
                    onClick={() => handleAddToCart(product.name)} 
                    className="p-4 bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                  >
                    <ShoppingCart size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}