import React from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const FinalCTA: React.FC = () => {
    const { title, subtitle, cta, secondaryText } = bookZeroData.finalCta;

    return (
        <section className="py-32 relative overflow-hidden" data-purpose="final-call-to-action">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 bg-brand-nearBlack">
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent/40 via-transparent to-transparent blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 selection:bg-brand-accent/30 selection:text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight drop-shadow-sm">
                        {title}
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        {subtitle}
                    </p>
                    
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-accent text-white px-12 py-5 rounded-2xl font-black text-xl shadow-[0_0_40px_rgba(0,199,83,0.4)] hover:shadow-[0_0_60px_rgba(0,199,83,0.6)] hover:bg-emerald-500 transition-all w-full sm:w-auto"
                        >
                            {cta}
                        </motion.button>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm font-semibold underline underline-offset-4 decoration-zinc-600 hover:decoration-white">
                            {secondaryText}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
