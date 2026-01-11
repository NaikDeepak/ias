import { motion } from 'framer-motion';
import { FacebookLogo, InstagramLogo, ArrowRight, UsersThree } from '@phosphor-icons/react';

export default function SocialConnect() {
    return (
        <section id="social" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
            {/* Background noise texture simulation */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                        <UsersThree size={16} weight="fill" className="text-teal-400" />
                        <span className="text-sm font-medium text-neutral-300">Join 15,000+ Active Members</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Part of the <span className="text-teal-400">Pack.</span></h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We don't just ride and run; we celebrate every milestone together. Connect with us for route maps, event photos, and your daily dose of motivation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Instagram Card */}
                    <a
                        href="https://www.instagram.com/indoathleticsociety/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl bg-neutral-800 p-10 transition-all hover:bg-neutral-800/80 hover:-translate-y-1"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    <InstagramLogo size={32} weight="fill" className="text-pink-500" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-neutral-400 group-hover:bg-white/10 transition-colors">
                                    @indoathleticsociety
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3">Instagram</h3>
                                <p className="text-neutral-400 mb-8 leading-relaxed">
                                    Catch the "Photo of the Day", athlete spotlights, and reels from our Sunday long rides.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                                    <span>See Stories</span>
                                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Facebook Card */}
                    <a
                        href="https://www.facebook.com/indoathleticsociety/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl bg-neutral-800 p-10 transition-all hover:bg-neutral-800/80 hover:-translate-y-1"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                    <FacebookLogo size={32} weight="fill" className="text-blue-500" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-neutral-400 group-hover:bg-white/10 transition-colors">
                                    Indo Athletic Society
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-3">Facebook</h3>
                                <p className="text-neutral-400 mb-8 leading-relaxed">
                                    The hub for event discussions, route planning, and connecting with fellow athletes in your area.
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                                    <span>Join Group</span>
                                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
