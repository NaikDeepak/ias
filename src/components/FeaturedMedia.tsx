import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CalendarBlank, ArrowRight, Trophy, X, CheckCircle } from '@phosphor-icons/react';

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
        date: "June 2025",
        link: "https://www.townscript.com/o/iasindia",
        description: "Join the spiritual journey on wheels. A tradition of devotion and endurance.",
        fullDescription: "Pandharpur Wari is a 700-year-old tradition of devotion. We ride to spread the message of 'Solution Not Pollution'. This journey is not just about endurance; it's about committing to community health and environmental awareness while paying homage to the deity Vithoba.",
        highlights: [
            "200km - 250km Endurance Ride",
            "Traditional 'Wari' Atmosphere",
            "Night Stay at Pandharpur",
            "Support Vehicle & Hydration"
        ]
    },
    {
        id: 2,
        title: "Bhakti Shakti Cyclothon",
        category: "City Ride",
        image: bhaktiImg,
        location: "Nigdi, Pune",
        date: "09 Feb 2025",
        link: "https://www.townscript.com/e/iasbsc2026",
        description: "The biggest cyclothon in Pimpri-Chinchwad. Race for glory, ride for fitness.",
        fullDescription: "We ride to create awareness about cycling as a sustainable means of transport. In our day-to-day lives, cycling helps reduce pollution and leads to a healthier community. This event is about exploring the cyclist in you and joining a movement to rebuild our city's cycling culture.",
        highlights: [
            "100km / 50km / 20km Categories",
            "Scenic Route via Lonavala Toll",
            "Timing Chips for 100km/50km",
            "Post-ride Healthy Refreshments"
        ]
    },
    {
        id: 3,
        title: "Shivneri Ride",
        category: "Heritage Climb",
        image: shivneriImg,
        location: "Junnar / Ghat",
        date: "Oct 2025",
        link: "https://www.townscript.com/e/iassr2025",
        description: "Conquer the fort. A monsoon ride exploring the birth place of Chhatrapati Shivaji Maharaj.",
        fullDescription: "While everyone feels patriotic on Great Days, few put it into action. We invite you to an epic ride to Shivneri Fort, the birthplace of Chhatrapati Shivaji Maharaj, to celebrate our Independence. It is a tribute to our history and a test of our spirit.",
        highlights: [
            "90km Heritage Route",
            "Monsoon/Post-Monsoon Scenery",
            "Visit to Shivneri Fort",
            "Group Night Stay at Ozar"
        ]
    },
    {
        id: 4,
        title: "Tulapur Heritage Ride",
        category: "Cultural Ride",
        image: tulapurImg,
        location: "Tulapur Triveni Sangam",
        date: "March 2025",
        link: "https://www.townscript.com/e/TulapurRide23",
        description: "A scenic ride to the historic Triveni Sangam. Connect with history.",
        fullDescription: "A homage to the Great King of Maratha Empire, Chhatrapati Sambhaji Maharaj. We ride to the historic village of Tulapur at the 'Triveni Sangam' to pay our respects. It is a ride of remembrance, soaking in the rustic charm and deep history of our land.",
        highlights: [
            "40km Scenic Route",
            "Visit Triveni Sangam",
            "Historical Significance",
            "River View Sunset/Sunrise"
        ]
    }
];

const FeaturedMedia = () => {
    const [selectedEvent, setSelectedEvent] = useState<typeof EVENTS[0] | null>(null);

    return (
        <section id="events" className="py-24 relative z-10">
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
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EVENTS.map((item, i) => (
                        <motion.div
                            key={item.id}
                            onClick={() => setSelectedEvent(item)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-orange-500/30 transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] cursor-pointer"
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
                                        {/* <div className="flex items-center gap-1.5">
                                            <CalendarBlank weight="duotone" className="text-orange-400" />
                                            {item.date}
                                        </div> */}
                                        <div className="flex items-center gap-1.5">
                                            <MapPin weight="duotone" className="text-teal-400" />
                                            {item.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-neutral-900 w-full max-w-2xl md:rounded-3xl rounded-t-3xl border border-white/10 overflow-hidden relative max-h-[90vh] flex flex-col shadow-2xl z-50"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-white hover:text-black transition-colors"
                            >
                                <X size={20} weight="bold" />
                            </button>

                            {/* Hero Image */}
                            <div className="h-64 md:h-72 relative shrink-0">
                                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                                <div className="absolute bottom-6 left-6 md:left-8 right-6">
                                    <span className="inline-block px-3 py-1 bg-orange-500 text-black text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                        {selectedEvent.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{selectedEvent.title}</h2>
                                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-neutral-300">
                                        <div className="flex items-center gap-1.5">
                                            <CalendarBlank className="text-orange-400" size={18} />
                                            {selectedEvent.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="text-teal-400" size={18} />
                                            {selectedEvent.location}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar space-y-8">
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-3">Why We Ride</h4>
                                    <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                        {selectedEvent.fullDescription}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                                        <Trophy className="text-yellow-400" /> Highlights
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedEvent.highlights.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                                                <CheckCircle className="text-teal-500 shrink-0 mt-0.5" weight="fill" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="p-6 border-t border-white/5 bg-neutral-900">
                                <a
                                    href={selectedEvent.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold text-center rounded-xl transition-all flex items-center justify-center gap-2"
                                >
                                    Register Now <ArrowRight weight="bold" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FeaturedMedia;
