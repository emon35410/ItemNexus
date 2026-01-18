"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link'; // ডিটেইলস পেজের জন্য

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    const itemsPerPage = 8;

    useEffect(() => {
        setMounted(true);
        const fetchProducts = async () => {
            try {
                const res = await fetch('http://localhost:5000/products');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (!mounted || loading) return (
        <div className="h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 font-medium transition-colors duration-500">
            <div className="animate-pulse tracking-widest uppercase text-xs">Loading Nexus Collection...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12 space-y-2">
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Explore All Products</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        Showing {products.length > 0 ? indexOfFirstItem + 1 : 0}-
                        {Math.min(indexOfLastItem, products.length)} of {products.length} premium products
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentItems.map((product) => (
                        <div key={product.id} className="group bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 p-4 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">

                            {/* Image Container */}
                            <div>
                                <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800 mb-5 cursor-pointer">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill // fill ব্যবহার করা বেশি রেসপনসিভ
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <Link
                                            href={`/products/${product.id}`}
                                            className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-6 py-2.5 rounded-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl border border-white/20 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 group/btn"
                                        >
                                            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover/btn:text-white flex items-center gap-2">
                                                View Details
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm border border-white/20">
                                        <Star size={14} className="text-amber-500 fill-amber-500" />
                                        <span className="text-xs font-bold dark:text-white">4.5</span>
                                    </div>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="px-2 space-y-3">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-600 dark:text-indigo-400">
                                        {product.category}
                                    </span>
                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 line-clamp-1 hover:text-indigo-600 transition-colors cursor-pointer">
                                            {product.name}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">
                                        ${product.price}
                                    </p>
                                    <button className="p-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all active:scale-90 shadow-lg shadow-slate-200 dark:shadow-none">
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-20 flex items-center justify-center gap-3">
                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.max(prev - 1, 1));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === 1}
                            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 disabled:opacity-20 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentPage(index + 1);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}
                                    className={`w-12 h-12 rounded-2xl font-bold transition-all duration-300 ${currentPage === index + 1
                                            ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 scale-110'
                                            : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === totalPages}
                            className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 disabled:opacity-20 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;