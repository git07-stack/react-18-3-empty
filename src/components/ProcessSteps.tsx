import React from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const ProcessSteps: React.FC = () => {
    const { title, steps } = bookZeroData.processSteps;

    return (
        <section className="py-32 bg-white/40 border-t border-black/5 relative overflow-hidden" data-purpose="process-steps">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl md:text-5xl font-extrabold text-center mb-32 tracking-tight text-brand-nearBlack"
                >
                    {title}
                </motion.h2>

                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-40 gap-16 relative">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-[45%] relative z-10"
                    >
                        <span className="absolute -top-16 -left-8 text-[12rem] font-black text-black/[0.02] leading-none select-none pointer-events-none">
                            {steps[0].number}
                        </span>
                        <h3 className="text-3xl font-bold mb-6 text-brand-nearBlack relative z-10">{steps[0].title}</h3>
                        <p className="text-brand-gray text-lg mb-8 leading-relaxed relative z-10">{steps[0].description}</p>
                        <motion.a 
                            whileHover={{ x: 5 }}
                            className="text-brand-accent font-bold hover:underline underline-offset-4 decoration-2 cursor-pointer inline-flex items-center group relative z-10"
                        >
                            {steps[0].cta}
                        </motion.a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        className="md:w-1/2 w-full relative group"
                    >
                        <div className="absolute inset-0 bg-brand-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="glass-card rounded-3xl p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="font-extrabold text-lg">Data Extracted</span>
                                    <span className="text-brand-accent text-xs font-black uppercase tracking-wider bg-brand-accent/10 py-1.5 px-3 rounded-md">
                                        AI Powered
                                    </span>
                                </div>
                                <div className="space-y-4 text-sm font-medium">
                                    <div className="flex justify-between border-b border-black/5 pb-3 text-brand-gray"><span>Vendor</span><span className="text-brand-nearBlack font-bold">Costco</span></div>
                                    <div className="flex justify-between border-b border-black/5 pb-3 text-brand-gray"><span>Amount</span><span className="text-brand-nearBlack font-bold">$158.21</span></div>
                                    <div className="flex justify-between border-b border-black/5 pb-3 text-brand-gray"><span>Date</span><span className="text-brand-nearBlack font-bold">Jan 15, 2024</span></div>
                                    <div className="flex justify-between pt-1 text-brand-gray"><span>GST/HST</span><span className="text-brand-accent font-black">$11.20</span></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16 relative">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-[45%] relative z-10"
                    >
                        <span className="absolute -top-16 -right-8 text-[12rem] font-black text-black/[0.02] leading-none select-none pointer-events-none">
                            {steps[1].number}
                        </span>
                        <h3 className="text-3xl font-bold mb-6 text-brand-nearBlack relative z-10">{steps[1].title}</h3>
                        <p className="text-brand-gray text-lg mb-8 leading-relaxed relative z-10">{steps[1].description}</p>
                        <motion.a 
                            whileHover={{ x: 5 }}
                            className="text-brand-accent font-bold hover:underline underline-offset-4 decoration-2 cursor-pointer inline-flex items-center group relative z-10"
                        >
                            {steps[1].cta}
                        </motion.a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        className="md:w-1/2 w-full relative group"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="glass-card rounded-3xl p-6 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 relative z-10">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                                <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-xl border border-black/5">
                                    <div className="w-10 h-10 bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-lg shadow-inner"></div>
                                    <div className="flex-1">
                                        <div className="text-sm font-extrabold text-brand-nearBlack">Amazon Marketplace</div>
                                        <div className="text-[11px] font-medium text-brand-gray mt-1">Jan 12, 2024 • -$89.50</div>
                                    </div>
                                    <div className="text-[10px] font-black text-brand-accent bg-brand-accent/10 px-3 py-1.5 uppercase tracking-wider rounded-md">
                                        Categorized
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
