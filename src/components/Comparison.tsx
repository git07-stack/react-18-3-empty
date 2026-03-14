import React from 'react';
import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const Comparison: React.FC = () => {
    const { title, subtitle, features, cta, note } = bookZeroData.comparison;

    return (
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden" data-purpose="comparison-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-brand-nearBlack mb-6 tracking-tight">{title}</h2>
                <p className="text-brand-gray text-lg max-w-2xl mx-auto">{subtitle}</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
            >
                <div className="absolute inset-0 bg-brand-accent/5 blur-3xl opacity-50 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                <div className="overflow-x-auto bg-white/60 backdrop-blur-xl rounded-[2rem] p-2 border border-white shadow-2xl relative z-10">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="text-sm font-bold text-brand-gray uppercase tracking-wider">
                                <th className="p-8 w-1/3">Feature</th>
                                <th className="p-8 text-brand-nearBlack bg-gray-50/50 rounded-t-2xl border-x border-t border-black/5 shadow-sm text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 bg-brand-accent rounded-[4px] shadow-sm"></div> 
                                        BookZero
                                    </div>
                                </th>
                                <th className="p-8 text-center text-brand-gray/60 font-medium">QuickBooks</th>
                                <th className="p-8 text-center text-brand-gray/60 font-medium">FreshBooks</th>
                                <th className="p-8 text-center text-brand-gray/60 font-medium">Xero</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm border-t border-black/5">
                            {features.map((feature, idx) => {
                                const isLast = idx === features.length - 1;
                                return (
                                    <tr key={idx} className="border-b border-black/5 last:border-b-0 hover:bg-black/[0.02] transition-colors">
                                        <td className="p-8 font-bold text-brand-nearBlack">{feature.name}</td>
                                        <td className={`p-8 text-center font-black text-brand-accent bg-gray-50/50 border-x border-black/5 shadow-sm ${isLast ? 'rounded-b-2xl border-b' : ''}`}>
                                            {feature.bookZero}
                                        </td>
                                        <td className="p-8 text-center text-brand-gray/50 font-semibold">{feature.quickBooks}</td>
                                        <td className="p-8 text-center text-brand-gray/50 font-semibold">{feature.freshBooks}</td>
                                        <td className="p-8 text-center text-brand-gray/50 font-semibold">{feature.xero}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-nearBlack text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl hover:bg-black transition-all"
                >
                    {cta}
                </motion.button>
                <p className="text-brand-gray/60 text-sm font-semibold mt-6">{note}</p>
            </motion.div>
        </section>
    );
};
