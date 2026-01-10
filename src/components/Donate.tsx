import { motion } from 'framer-motion';
import { Heart, CreditCard, Gift, ArrowRight } from '@phosphor-icons/react';

export default function Donate() {
    return (
        <section className="py-24 bg-neutral-900 text-white relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-br from-teal-900/50 to-neutral-900 rounded-3xl p-8 md:p-12 border border-teal-500/20 relative overflow-hidden">
                    {/* Decorative sheen */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-6 text-xs font-bold uppercase tracking-wider">
                                <Heart size={12} weight="fill" className="fill-current" />
                                <span>Support Our Mission</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Empower the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-green-400">
                                    Next Generation
                                </span>
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                                Your contributions help us organize free health camps, plant trees, and support underprivileged athletes. Being a non-profit, every rupee you give goes directly back to the community.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-neutral-400">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <Gift size={16} weight="fill" className="text-orange-400" />
                                    </div>
                                    <span>Tax Benefits (80G)</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-400">
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <CreditCard size={16} weight="fill" className="text-blue-400" />
                                    </div>
                                    <span>Secure Payment</span>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full max-w-sm bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center">Make an Impact</h3>
                            <div className="space-y-4 mb-8">
                                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all font-medium text-left px-6 group flex items-center justify-between">
                                    <span>₹ 500</span>
                                    <span className="text-xs text-neutral-500 group-hover:text-teal-300">Plant 5 Trees</span>
                                </button>
                                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all font-medium text-left px-6 group flex items-center justify-between">
                                    <span>₹ 2,000</span>
                                    <span className="text-xs text-neutral-500 group-hover:text-teal-300">Sponsor an Athlete</span>
                                </button>
                                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all font-medium text-left px-6 group flex items-center justify-between">
                                    <span>Custom Amount</span>
                                    <ArrowRight size={16} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </div>
                            <button className="w-full py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                                Donate Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
