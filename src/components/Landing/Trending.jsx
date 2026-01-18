"use client";
import React, { useState, useEffect } from 'react'
import { ShoppingCart, Star, Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Trending() {
  const [recentProducts, setRecentProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch('http://localhost:5000/products?limit=4');
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

  if (loading) return (
    <div className="py-24 text-center dark:bg-slate-950 dark:text-white transition-colors duration-500">
      Loading Trends...
    </div>
  );

  return (
    <section className="py-14 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Part */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest text-xs uppercase">Top Picks</span>
            <h2 className="text-4xl font-black dark:text-white">Trending Now</h2>
            <p className="text-slate-500 dark:text-slate-400">Discover our most popular products this season.</p>
          </div>
          <Link href="/products">
            <button className="hidden sm:block px-6 py-2.5 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              View All Items
            </button>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recentProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-slate-50/50 dark:bg-slate-900/30 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
              
              {/* Image Wrapper */}
              <div className="relative h-64 w-full overflow-hidden bg-white dark:bg-slate-800">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Actions (View Details) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <Link href={`/products/${product.id}`}>
                    <button className="p-3 bg-white dark:bg-slate-900 rounded-full shadow-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 hover:scale-110 transition-all" title="View Details">
                      <Eye size={20} />
                    </button>
                  </Link>
                </div>

                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-lg dark:text-white border border-slate-200 dark:border-slate-700">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content Part */}
              <div className="p-6 space-y-4">
                {/* Clickable Title */}
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-bold text-lg dark:text-white leading-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors line-clamp-1 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs font-bold text-slate-500">4.5</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    ${product.price}
                  </span>
                  
                  {/* Buttons Group */}
                  <div className="flex gap-2">
                    <button className="p-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all active:scale-95 shadow-sm">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}