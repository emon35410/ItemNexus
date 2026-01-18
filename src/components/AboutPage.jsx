"use client";
import React from 'react';
import { Target, Users, ShieldCheck, Zap, Award, Globe } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
    const stats = [
        { id: 1, label: "Happy Customers", value: "50K+", icon: <Users className="text-indigo-600" size={24} /> },
        { id: 2, label: "Premium Products", value: "12K+", icon: <Award className="text-indigo-600" size={24} /> },
        { id: 3, label: "Global Delivery", value: "150+", icon: <Globe className="text-indigo-600" size={24} /> },
    ];

    const values = [
        {
            title: "Quality First",
            desc: "We ensure every product in our catalog meets the highest industry standards.",
            icon: <ShieldCheck size={32} />,
            color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600"
        },
        {
            title: "Fast Delivery",
            desc: "Our logistics network is optimized for the quickest turnaround time possible.",
            icon: <Zap size={32} />,
            color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600"
        },
        {
            title: "Customer Centric",
            desc: "Your satisfaction is our goal. Our support team is available 24/7 for you.",
            icon: <Target size={32} />,
            color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                
                {/* 1. Hero Section */}
                <div className="text-center mb-20 space-y-6">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
                        Redefining <span className="text-indigo-600">Shopping</span> <br /> 
                        Experience
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        ItemNexus started with a simple idea: to make premium quality products accessible to everyone, 
                        everywhere. We combine technology with style to bring you the best items.
                    </p>
                </div>

                {/* 2. Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {stats.map((stat) => (
                        <div key={stat.id} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 text-center shadow-xl shadow-slate-200/50 dark:shadow-none hover:scale-105 transition-transform duration-500">
                            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</h2>
                            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* 3. Image & Mission Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image 
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" 
                            alt="Our Team" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Our Mission & Vision</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            We believe that shopping should be more than just a transaction. It should be an experience that brings joy and value. 
                            Our team works tirelessly to curate the finest electronics, fashion, and lifestyle products from around the world.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <div className="p-3 bg-indigo-600 text-white rounded-2xl font-bold italic">IN</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white">Authenticity Guaranteed</h4>
                                    <p className="text-sm text-slate-500">Every item is verified by our quality control experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="group p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all duration-500">
                            <div className={`w-16 h-16 ${value.color} rounded-[1.5rem] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">{value.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AboutPage;