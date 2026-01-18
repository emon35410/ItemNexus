"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, Star, Eye } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

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
                const res = await fetch('https://item-nexus-server.vercel.app/products');
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

    const handleAddToCart = () => {
        toast.success(` added to cart!`, {
            style: { borderRadius: '15px', background: '#1e293b', color: '#fff' }
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    if (!mounted || loading) return (
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="relative flex items-center justify-center">
                {/* Outer Ring */}
                <div className="w-16 h-16 border-4 border-indigo-100 dark:border-indigo-950 rounded-full"></div>

                {/* Spinning Ring */}
                <div className="absolute w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

                {/* Center Dot */}
                <div className="absolute w-2 h-2 bg-indigo-600 rounded-full animate-ping"></div>
            </div>

            {/* Text with subtle fade effect */}
            <div className="mt-6 flex flex-col items-center gap-2">
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-slate-800 dark:text-slate-200 animate-pulse">
                    Item<span className="text-indigo-600">Nexus</span>
                </h2>
                <div className="h-1 w-12 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 w-1/2 animate-[loading_1.5s_infinite_ease-in-out]"></div>
                </div>
            </div>

           
            <style jsx>{`
    @keyframes loading {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
  `}</style>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 md:pt-32 pb-20 px-4 md:px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-10 space-y-2 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Nexus Collection</h1>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
                        Showing {products.length > 0 ? indexOfFirstItem + 1 : 0}-{Math.min(indexOfLastItem, products.length)} of {products.length} products
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {currentItems.map((product) => (
                        <div key={product.id} className="group bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/60 p-3 md:p-4 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col">

                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden rounded-4xl bg-slate-100 dark:bg-slate-800/50 mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* View Details Button - Perfect for Mobile & Desktop */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2">
                                    <Link href={`/products/${product.id}`}>
                                        <button className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-xl text-slate-900 dark:text-white hover:bg-indigo-600 hover:text-white transition-all active:scale-90 border border-white/20" title="View Details">
                                            <Eye size={20} />
                                        </button>
                                    </Link>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-3 right-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                                    <Star size={12} className="text-amber-500 fill-amber-500" />
                                    <span className="text-[10px] font-bold dark:text-white">4.5</span>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="px-2 flex-1 flex flex-col justify-between space-y-3">
                                <div className="space-y-1">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-0.5 rounded-md">
                                        {product.category}
                                    </span>
                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 line-clamp-1 hover:text-indigo-600 transition-colors cursor-pointer pt-1">
                                            {product.name}
                                        </h3>
                                    </Link>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-2xl font-black text-slate-900 dark:text-white">
                                        ${product.price}
                                    </p>
                                    <button
                                        onClick={() => handleAddToCart(product.name)}
                                        className="p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white transition-all active:scale-90 shadow-lg shadow-indigo-500/5"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-16 flex items-center justify-center gap-2 md:gap-3">
                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.max(prev - 1, 1));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === 1}
                            className="p-3 md:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 disabled:opacity-20 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="hidden sm:flex gap-2">
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

                        {/* Mobile Page Indicator */}
                        <div className="sm:hidden px-4 font-bold text-slate-500">
                            {currentPage} / {totalPages}
                        </div>

                        <button
                            onClick={() => {
                                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            disabled={currentPage === totalPages}
                            className="p-3 md:p-4 rounded-2xl border border-slate-200 dark:border-slate-800 disabled:opacity-20 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-all"
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