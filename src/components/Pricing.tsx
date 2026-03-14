import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const Pricing: React.FC = () => {
    const { title, subtitle, plans } = bookZeroData.pricing;
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-32 bg-white/40 border-t border-black/5" data-purpose="pricing-plans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-brand-nearBlack mb-6 tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-gray text-lg max-w-2xl mx-auto mb-10"
                    >
                        {subtitle}
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex p-1.5 bg-brand-background/50 backdrop-blur-md rounded-xl border border-black/5 shadow-inner"
                    >
                        <button 
                            onClick={() => setIsYearly(false)}
                            className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${!isYearly ? 'bg-white text-brand-nearBlack shadow-sm border border-black/5' : 'text-brand-gray hover:text-brand-nearBlack'}`}
                        >
                            Monthly
                        </button>
                        <button 
                            onClick={() => setIsYearly(true)}
                            className={`px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${isYearly ? 'bg-white text-brand-nearBlack shadow-sm border border-black/5' : 'text-brand-gray hover:text-brand-nearBlack'}`}
                        >
                            Yearly <span className="text-[10px] bg-brand-accent/20 text-brand-accent px-2 py-0.5 rounded-full ml-1 uppercase tracking-wider">Save 20%</span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 items-end">
                    {plans.map((plan, idx) => (
                        <motion.div 
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={`relative flex flex-col items-center text-center p-8 rounded-[2rem] transition-all duration-500 overflow-hidden group
                                ${plan.highlight 
                                    ? 'bg-white border-2 border-brand-accent shadow-[0_20px_60px_-15px_rgba(0,199,83,0.3)] md:-translate-y-4 md:scale-105 z-10' 
                                    : 'bg-white/60 backdrop-blur-xl border border-white hover:bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] mt-8'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-accent" />
                            )}
                            
                            {plan.badge && (
                                <div className="absolute top-0 right-8 bg-brand-accent text-white px-4 py-1.5 rounded-b-xl text-[10px] font-black uppercase tracking-widest shadow-md">
                                    {plan.badge}
                                </div>
                            )}

                            <span className={`text-xs font-black uppercase tracking-widest mb-4 ${plan.highlight ? 'text-brand-accent' : 'text-brand-gray/60'}`}>
                                {plan.name}
                            </span>
                            
                            <div className={`text-5xl font-black mb-2 tracking-tight ${plan.highlight ? 'text-brand-nearBlack' : 'text-brand-nearBlack'}`}>
                                {plan.price !== 'Free' && isYearly ? `$${Math.floor(parseInt(plan.price.replace('$','')) * 0.8)}` : plan.price}
                                {plan.price !== 'Free' && <span className="text-base font-medium text-brand-gray/60 -ml-1">/mo</span>}
                            </div>
                            
                            <div className="text-sm font-semibold text-brand-gray/80 mb-10 h-5">
                                {isYearly && plan.price !== 'Free' ? 'Billed annually' : plan.period}
                            </div>
                            
                            <ul className="text-sm text-left w-full space-y-4 mb-12 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? 'bg-brand-accent/20 text-brand-accent' : 'bg-black/5 text-brand-nearBlack'}`}>
                                            <span className="text-xs font-bold">✓</span>
                                        </div>
                                        <span className={`font-medium ${plan.highlight ? 'text-brand-nearBlack' : 'text-brand-gray'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300
                                    ${plan.highlight 
                                        ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/40' 
                                        : 'bg-brand-background/50 text-brand-nearBlack hover:bg-brand-background'
                                    }`}
                            >
                                {plan.cta}
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
