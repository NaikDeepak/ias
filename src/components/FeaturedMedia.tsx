import { motion } from 'framer-motion';
import { MapPin, CalendarBlank, ArrowRight, Trophy } from '@phosphor-icons/react';

// Using the recently generated and validated images
import bhaktiImg from '../assets/bhakti_shakti_cyclothon_v2.png';
import shivneriImg from '../assets/shivneri_ride_1768025100903.png';
import wariImg from '../assets/pune_pandharpur_wari_retry_1768025130005.png';
import tulapurImg from '../assets/tulapur_ride_1768025146379.png';

const EVENTS = [
    {
        id: 1,
        title: "Pune Pandharpur Cycle Wari",
        category: "Pilgrimage Ride",
        image: wariImg,
        location: "Pune to Pandharpur",
        date: "July 2025",
        link: "https://www.townscript.com/o/iasindia",
        description: "Join the spiritual journey on wheels. A tradition of devotion and endurance."
    },
    {
        id: 2,
        title: "Bhakti Shakti Cyclothon",
        category: "City Race",
        image: bhaktiImg,
        location: "Nigdi, Pune",
        date: "Nov 2025",
        link: "https://www.townscript.com/e/iasbsc2026",
        description: "The biggest cyclothon in Pimpri-Chinchwad. Race for glory, ride for fitness."
    },
    {
        id: 3,
        title: "Shivneri Ride",
        category: "Heritage Climb",
        image: shivneriImg,
        location: "Junnar / Ghat",
        date: "August 2025",
        link: "https://www.townscript.com/e/iassr2025",
        description: "Conquer the fort. A monsoon ride exploring the birth place of Chhatrapati Shivaji Maharaj."
    },
    {
        id: 4,
        title: "Tulapur Heritage Ride",
        category: "Cultural Ride",
        image: tulapurImg,
        location: "Tulapur Triveni Sangam",
        date: "Sept 2025",
        link: "https://www.townscript.com/e/TulapurRide23",
        description: "A scenic ride to the historic Triveni Sangam. Connect with history."
    }
];

const FeaturedMedia = () => {
    return (
        <section className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white/90">Flagship Events</h2>
                        <p className="text-neutral-400 max-w-xl text-lg">
                            Experience the thrill of our major annual congregations. From spiritual journeys to competitive races, we ride together.
                        </p>
                    </div>
                    <button className="group flex items-center gap-2 text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                        View All Events <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EVENTS.map((item, i) => (
                        <motion.a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] block"
                        >
                            <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Placeholder */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
                                            {item.category}
                                        </span>
                                        {i === 1 && (
                                            <span className="px-3 py-1 bg-orange-500 text-black rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                                                <Trophy weight="fill" size={12} /> Featured
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-3xl font-bold mb-2 leading-tight group-hover:text-orange-200 transition-colors">{item.title}</h3>
                                    <p className="text-neutral-300 text-sm mb-4 line-clamp-2 max-w-sm">{item.description}</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-400 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <CalendarBlank weight="duotone" className="text-orange-400" />
                                            {item.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin weight="duotone" className="text-teal-400" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 bg-gradient-to-tr from-white/0 via-white/5 to-white/0" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedMedia;
