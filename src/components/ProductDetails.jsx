"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RotateCcw, Heart } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast'; 

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch('https://item-nexus-server.vercel.app/products');
                const allProducts = await res.json();
                const foundProduct = allProducts.find(p => p.id === parseInt(id));
                setProduct(foundProduct);
                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    // Toast Handlers
    const handleAddToCart = () => {
        toast.success(`added to cart!`, {
            style: {
                borderRadius: '16px',
                background: '#1e293b',
                color: '#fff',
                padding: '16px',
            },
            iconTheme: {
                primary: '#4f46e5',
                secondary: '#fff',
            },
        });
    };

    const handleWishlist = () => {
        toast(`added to wishlist!`, {
            icon: '❤️',
            style: {
                borderRadius: '16px',
                background: '#1e293b',
                color: '#fff',
                padding: '16px',
            },
        });
    };

    if (loading) return (
       
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
            <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-indigo-100 dark:border-indigo-950 rounded-full"></div>
                <div className="absolute w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute w-2 h-2 bg-indigo-600 rounded-full animate-ping"></div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-slate-800 dark:text-slate-200 animate-pulse">
                    Nexus<span className="text-indigo-600">Loading</span>
                </h2>
            </div>
        </div>
    );

    if (!product) return (
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 gap-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Product Not Found!</h2>
            <Link href="/products" className="text-indigo-600 font-bold underline">Back to Shop</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 md:pt-32 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                
                {/* Back Button */}
                <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 font-bold group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
                    
                    {/* Left: Product Image */}
                    <div className="relative aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-[10px] font-black uppercase tracking-widest">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 tracking-tight leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl">
                                    <Star size={16} className="text-amber-500 fill-amber-500" />
                                    <span className="text-sm font-black text-amber-700 dark:text-amber-400">4.8</span>
                                </div>
                                <span className="text-slate-400 text-xs md:text-sm font-medium border-l border-slate-200 dark:border-slate-800 pl-4">
                                    120+ Customer Reviews
                                </span>
                            </div>
                        </div>

                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            Experience the perfect blend of quality and style with the {product.name}. 
                            Crafted for durability and designed for the modern lifestyle.
                        </p>

                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">${product.price}</span>
                            <span className="text-lg md:text-xl text-slate-400 line-through font-bold">${(product.price * 1.2).toFixed(2)}</span>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 md:py-8 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <Truck className="text-indigo-600" size={20} />
                                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400">Free Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-indigo-600" size={20} />
                                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400">1 Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <RotateCcw className="text-indigo-600" size={20} />
                                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-400">30 Day Return</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button 
                                onClick={handleAddToCart}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button 
                                onClick={handleWishlist}
                                className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Heart size={20} className="text-rose-500" />
                                Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;