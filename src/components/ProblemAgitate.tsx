import { motion } from 'framer-motion';
import { bookZeroData } from '../data/mockData';

export interface ProblemAgitateProps {
    className?: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 80, damping: 20 }
    }
};

export const ProblemAgitate: React.FC<ProblemAgitateProps> = ({ className = '' }) => {
    const { headline, problems, transition } = bookZeroData.problemAgitate;

    return (
        <section 
            className={`py-32 relative overflow-hidden bg-brand-softGray ${className}`} 
            data-purpose="problem-section"
        >
            {/* Background Decorative Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-accent/5 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-black/5 text-xs font-bold tracking-widest text-brand-nearBlack uppercase mb-8 shadow-sm">
                        The Problem
                    </span>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-brand-nearBlack mb-24 tracking-tight leading-tight">
                        {headline}
                    </h2>
                </motion.div>

                <motion.div 
                    className="grid md:grid-cols-3 gap-8 mb-32"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {problems.map((problem) => (
                        <motion.div 
                            key={problem.id} 
                            variants={itemVariants}
                            className="group relative bg-white/80 backdrop-blur-xl p-10 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] border border-white transition-all duration-500 text-left overflow-hidden hover:-translate-y-2"
                        >
                            {/* Hover Inner Glow Layer */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className={`w-16 h-16 ${problem.iconBg} ${problem.iconColor} rounded-2xl flex items-center justify-center mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.05)] group-hover:scale-110 transition-transform duration-500 ease-out relative`}>
                                <div className="absolute inset-0 bg-current opacity-20 blur-xl rounded-2xl group-hover:opacity-40 transition-opacity duration-500" />
                                <span className="material-symbols-outlined text-4xl relative z-10">{problem.icon}</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-brand-nearBlack mb-4 group-hover:text-brand-accent transition-colors duration-300">
                                {problem.title}
                            </h3>
                            <p className="text-brand-gray/90 leading-relaxed text-lg font-medium">
                                {problem.description}
                            </p>

                            {/* Decorative Corner subtle effect */}
                            <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-tl from-current to-transparent opacity-5 rounded-full group-hover:scale-[2] transition-transform duration-700 pointer-events-none ${problem.iconColor}`} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                >
                    <div className="relative inline-block group">
                        <div className="absolute inset-0 bg-brand-accent/20 blur-3xl rounded-full group-hover:bg-brand-accent/30 transition-colors duration-700" />
                        <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-full px-10 py-8 md:px-16 md:py-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                            <p className="text-3xl md:text-5xl font-semibold text-brand-nearBlack tracking-tight">
                                <span className="text-brand-gray/60 italic">{transition.prefix}</span> 
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent to-emerald-600 font-extrabold ml-3">
                                    {transition.highlight}
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
