"use client";
import React, { useState, useEffect } from 'react';
import { Smartphone, Watch, Shirt, Laptop, Camera, Coffee } from "lucide-react";
import Link from "next/link";

export default function Categories() {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 1, name: "Electronics", icon: <Smartphone size={32} />, color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600" },
    { id: 2, name: "Fashion", icon: <Shirt size={32} />, color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600" },
    { id: 3, name: "Accessories", icon: <Watch size={32} />, color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600" },
    { id: 4, name: "Laptops", icon: <Laptop size={32} />, color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600" },
    { id: 5, name: "Photography", icon: <Camera size={32} />, color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600" },
    { id: 6, name: "Lifestyle", icon: <Coffee size={32} />, color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600" },
  ];

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch('http://localhost:5000/products');
        const allProducts = await res.json();

        const categoryCounts = allProducts.reduce((acc, product) => {
          const catName = product.category;
          acc[catName] = (acc[catName] || 0) + 1;
          return acc;
        }, {});

        setCounts(categoryCounts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category counts:", error);
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <section id="categories-section" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black dark:text-white mb-4 tracking-tight">Browse by Category</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
            Explore our curated selection across {categories.length} distinct categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/products?category=${cat.name}`}
              className="group cursor-pointer flex flex-col items-center p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 hover:bg-white dark:hover:bg-slate-900 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-sm`}>
                {cat.icon}
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white mb-1">{cat.name}</h3>
              
              <p className="text-[10px] uppercase tracking-[0.15em] font-black text-slate-400 dark:text-slate-500">
                {loading ? "..." : `${counts[cat.name] || 0} Items`}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}