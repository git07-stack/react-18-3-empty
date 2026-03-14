import React from 'react';
import { bookZeroData } from '../data/mockData';

export const Footer: React.FC = () => {
    const { brand, description, columns, copyright, designer } = bookZeroData.footer;

    return (
        <footer className="bg-white pt-24 pb-12 border-t border-black/5" data-purpose="site-footer">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2">
                        <span className="font-black text-2xl tracking-tight text-brand-nearBlack mb-6 block">
                            {brand}
                        </span>
                        <p className="text-brand-gray text-base leading-relaxed max-w-xs font-medium">
                            {description}
                        </p>
                    </div>
                    
                    {columns.map((column, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="font-bold text-brand-nearBlack mb-6 uppercase tracking-wider text-xs">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href="#" className="text-brand-gray hover:text-brand-accent transition-colors text-sm font-medium">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-brand-gray/60">
                    <p>{copyright}</p>
                    <p>{designer}</p>
                </div>
            </div>
        </footer>
    );
};
