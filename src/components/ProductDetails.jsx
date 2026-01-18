"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch('http://localhost:5000/products');
                const allProducts = await res.json();
                // আইডি অনুযায়ী প্রোডাক্ট খুঁজে বের করা
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

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-white dark:bg-slate-950">
            <div className="animate-pulse text-slate-400 font-bold tracking-widest uppercase">Loading Product...</div>
        </div>
    );

    if (!product) return (
        <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 gap-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Product Not Found!</h2>
            <Link href="/products" className="text-indigo-600 font-bold underline">Back to Shop</Link>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                
                {/* Back Button */}
                <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 font-bold group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left: Product Image */}
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                            priority
                        />
                    </div>

                    {/* Right: Product Info */}
                    <div className="space-y-8">
                        <div>
                            <span className="px-4 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-black uppercase tracking-widest">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 tracking-tight leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-xl">
                                    <Star size={16} className="text-amber-500 fill-amber-500" />
                                    <span className="text-sm font-black text-amber-700 dark:text-amber-400">4.8</span>
                                </div>
                                <span className="text-slate-400 text-sm font-medium border-l border-slate-200 dark:border-slate-800 pl-4">
                                    120+ Customer Reviews
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            Experience the perfect blend of quality and style with the {product.name}. 
                            Crafted for durability and designed for the modern lifestyle, this is a must-have item in your {product.category} collection.
                        </p>

                        <div className="flex items-baseline gap-4">
                            <span className="text-5xl font-black text-slate-900 dark:text-white">${product.price}</span>
                            <span className="text-xl text-slate-400 line-through font-bold">${(product.price * 1.2).toFixed(2)}</span>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-3">
                                <Truck className="text-indigo-600" size={20} />
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Free Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-indigo-600" size={20} />
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">1 Year Warranty</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <RotateCcw className="text-indigo-600" size={20} />
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">30 Day Return</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-3xl shadow-xl shadow-indigo-500/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button className="px-8 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-black rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
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