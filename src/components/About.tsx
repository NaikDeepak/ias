import { motion } from 'framer-motion';
import { UsersThree, Plant, Heart, Globe } from '@phosphor-icons/react';

export default function About() {
    return (
        <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-6 text-xs font-bold uppercase tracking-wider">
                            <Globe size={12} weight="fill" />
                            <span>India's Largest Sports NGO</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                            Driving Change Through <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
                                Health & Environment
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                            Indo Athletic Society (IAS) is a government-registered, non-profit organization dedicated to building a greener, healthier nation. We are more than just a sports club; we are a movement.
                        </p>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            Our mission is to serve the nation by fostering a community that prioritizes fitness and environmental stewardship. Whether you ride, run, trek, or swim, you are part of a massive force for good.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Plant size={32} weight="fill" className="text-green-500 mb-3" />
                                <h4 className="font-bold text-xl mb-1">Green Mission</h4>
                                <p className="text-sm text-neutral-500">Promoting eco-friendly commuting and preservation.</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                <Heart size={32} weight="fill" className="text-red-500 mb-3" />
                                <h4 className="font-bold text-xl mb-1">Healthy Nation</h4>
                                <p className="text-sm text-neutral-500">Fighting lifestyle diseases through active living.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-3xl blur-3xl" />
                        <div className="relative bg-neutral-800 border border-white/10 rounded-3xl p-10 overflow-hidden group hover:border-teal-500/30 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <UsersThree size={256} weight="duotone" />
                            </div>

                            <div className="relative z-10 text-center">
                                <span className="text-7xl md:text-8xl font-bold text-white block mb-2 tracking-tighter">
                                    15,000+
                                </span>
                                <span className="text-xl md:text-2xl text-teal-400 font-medium block mb-8">
                                    Active Members
                                </span>

                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Cyclists', 'Runners', 'Trekkers', 'Swimmers'].map((activity) => (
                                        <span key={activity} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm font-medium">
                                            {activity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
