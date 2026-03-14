import React from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const Founder: React.FC = () => {
    const { badge, title, paragraphs, image, cta } = bookZeroData.founder;

    return (
        <section className="py-32 bg-white relative overflow-hidden" data-purpose="about-founder">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-softGray rounded-l-[100px] hidden lg:block" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-1/2"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-brand-softGray text-xs font-bold tracking-widest text-brand-nearBlack uppercase mb-8 border border-black/5">
                            {badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-nearBlack mb-8 tracking-tight leading-tight">
                            {title}
                        </h2>
                        
                        <div className="space-y-6 text-brand-gray text-lg leading-relaxed mb-10">
                            {paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-nearBlack text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl hover:bg-black transition-all"
                        >
                            {cta}
                        </motion.button>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="absolute inset-0 bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-transform duration-500">
                            <img 
                                src={image} 
                                alt="Founder" 
                                className="w-full h-auto object-cover object-center max-h-[600px] scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50">
                                <p className="font-bold text-brand-nearBlack text-lg">Eric Teoh</p>
                                <p className="text-brand-gray text-sm font-medium">Founder, BookZero</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
