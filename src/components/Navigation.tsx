import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export const Navigation: React.FC = () => {
    const { nav } = bookZeroData;
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav 
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#e7e2da]/80 backdrop-blur-md border-black/5 py-3 shadow-sm' : 'bg-transparent border-transparent py-5'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            data-purpose="main-navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-nearBlack rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative z-10">{nav.brand.charAt(0)}</span>
                        </div>
                        <span className="font-extrabold text-2xl tracking-tight text-brand-nearBlack cursor-pointer">
                            {nav.brand}
                        </span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-10 text-sm font-semibold">
                        {nav.links.map(link => (
                            <a key={link} href="#" className="text-brand-gray hover:text-brand-nearBlack transition-colors relative group">
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <a href="#" className="hidden sm:block text-sm font-bold text-brand-nearBlack hover:text-brand-accent transition-colors">
                            {nav.signIn}
                        </a>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-brand-nearBlack text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:bg-black transition-all"
                        >
                            {nav.cta}
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
