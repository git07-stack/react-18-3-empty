import React from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const Hero: React.FC = () => {
    const { hero } = bookZeroData;

    return (
        <section className="pt-40 pb-24 overflow-hidden relative" data-purpose="hero-content">
            {/* Top decorative gradient blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-brand-accent/10 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-black/5 text-xs font-bold text-brand-nearBlack mb-8 shadow-sm">
                        <span className="mr-2 text-base leading-none">✨</span> {hero.tag.replace('✨ ', '')}
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] text-brand-nearBlack">
                        {hero.titlePrefix}<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-600">
                            {hero.titleHighlight}
                        </span>
                    </h1>
                    
                    <p className="text-brand-gray/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed">
                        {hero.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-brand-nearBlack text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all"
                        >
                            {hero.primaryCta}
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-brand-nearBlack border border-black/10 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white shadow-sm transition-all"
                        >
                            {hero.secondaryCta}
                        </motion.button>
                    </div>
                    <p className="text-sm font-semibold text-brand-gray/60 mb-20">{hero.note}</p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                    className="relative mx-auto max-w-5xl group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/30 via-emerald-400/20 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/40 bg-white/50 backdrop-blur-sm p-2">
                        <div className="rounded-[1.5rem] overflow-hidden bg-brand-nearBlack">
                            <img 
                                alt="BookZero Dashboard Preview" 
                                className="w-full object-cover max-h-[600px] object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-[1.02] transform origin-top" 
                                src={hero.image}
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-24 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-brand-gray/80 font-bold"
                >
                    {hero.trustIndicators.map((indicator, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-brand-accent">✓</span> {indicator.replace('✓ ', '')}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
