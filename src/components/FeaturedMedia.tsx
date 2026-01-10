import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, CalendarBlank, ArrowRight, Trophy } from '@phosphor-icons/react';
import punePandharpur from '../assets/pune_pandharpur_wari_retry_1768025130005.png';
import bhaktiShakti from '../assets/bhakti_shakti_cyclothon_v2.png';
import shivneri from '../assets/shivneri_ride_1768025100903.png';
import tulapur from '../assets/tulapur_ride_1768025146379.png';

const EVENTS = [
    {
        id: 1,
        title: 'Pune Pandharpur Cycle Wari',
        type: 'Iconic Flagship',
        date: 'Annual (June/July)',
        location: 'Pune to Pandharpur',
        url: punePandharpur,
        link: 'https://www.townscript.com/o/iasindia',
        span: 'col-span-1 md:col-span-2 row-span-2',
        description: "The most iconic devotional ride. 200km of pure endurance and spiritual energy."
    },
    {
        id: 2,
        title: 'Bhakti Shakti Cyclothon',
        type: 'Cyclothon',
        date: 'Feb 2026',
        location: 'Nigdi, Pune',
        url: bhaktiShakti,
        link: 'https://www.townscript.com/e/iasbsc2026',
        span: 'col-span-1 row-span-1',
        description: "A high-energy city race celebrating strength and devotion."
    },
    {
        id: 3,
        title: 'Shivneri Ride',
        type: 'Hill Challenge',
        date: '2025 Edition',
        location: 'Shivneri Fort',
        url: shivneri,
        link: 'https://www.townscript.com/e/iassr2025',
        span: 'col-span-1 row-span-1',
        description: "Conquer the climb to the birthplace of Chhatrapati Shivaji Maharaj."
    },
    {
        id: 4,
        title: 'Tulapur Heritage Ride',
        type: 'Culture Ride',
        date: '2023 Edition',
        location: 'Tulapur Triveni Sangam',
        url: tulapur,
        link: 'https://www.townscript.com/e/TulapurRide23',
        span: 'col-span-1 md:col-span-2 row-span-1',
        description: "A scenic journey through history along the river banks."
    },
];

export default function FeaturedMedia() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-32 bg-neutral-950 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-3 block">Mark Your Calendars</span>
                        <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                            Flagship <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                                Events
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center gap-4 max-w-sm"
                    >
                        <div className="h-px w-16 bg-white/20 shrink-0" />
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Join thousands of athletes in our signature annual events. Challenge yourself, explore new routes, and make history.
                        </p>
                    </motion.div>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[900px] md:h-[700px]">
                    {EVENTS.map((item, index) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer bg-neutral-900 border border-white/5 ${item.span}`}
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-[0.8s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-md text-xs rounded-full font-bold uppercase tracking-wider text-black flex items-center gap-1">
                                    <Trophy size={14} weight="fill" />
                                    {item.type}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-3 text-orange-200 text-xs font-semibold uppercase tracking-wide">
                                    <div className="flex items-center gap-1">
                                        <CalendarBlank size={14} weight="bold" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} weight="bold" />
                                        {item.location}
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">{item.title}</h3>
                                <p className="text-neutral-300 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-orange-400 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 delay-100">
                                    <span>Register Now</span>
                                    <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Organic Progress Bar */}
            <div className="mt-24 h-px bg-white/10 relative w-full overflow-hidden">
                <motion.div
                    style={{ width: x }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-yellow-500 to-teal-500 shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                />
            </div>
        </section>
    );
}
