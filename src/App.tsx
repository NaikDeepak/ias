import { motion } from 'framer-motion';
import FeaturedMedia from './components/FeaturedMedia';
import SocialConnect from './components/SocialConnect';
import About from './components/About';
import Donate from './components/Donate';
import { List, Lightning, UserCircle } from '@phosphor-icons/react';
import iasLogo from './assets/ias_logo.png';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-orange-500 selection:text-white font-sans relative">

      {/* Global Atmosphere / Aurora Background */}
      <div className="fixed inset-0 z-[-1] bg-neutral-950">
        <div className="absolute top-0 left-0 w-[50vh] h-[50vh] bg-orange-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[50vh] h-[50vh] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-neutral-900/50 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-white/5 supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iasLogo} alt="Indo Athletic Society Logo" className="w-12 h-12 object-contain" />
            <span className="text-lg font-bold tracking-tight text-white/90">Indo Athletic Society</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
              <a href="#" className="hover:text-amber-500 transition-colors">Rides</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Runs</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Events</a>
              <a href="#" className="hover:text-amber-500 transition-colors">About Us</a>
              <div className="h-4 w-px bg-white/10"></div>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-2">
                <UserCircle size={20} weight="bold" />
                Login
              </button>
              <button className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-neutral-200 transition-all font-semibold text-sm">
                Join Now
              </button>
            </div>

            <button className="md:hidden p-2 text-white/80 hover:text-white">
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Authentic outdoor group shot */}
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            alt="Cyclists riding together at sunset"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 mb-8 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Lightning size={14} weight="fill" className="text-orange-400" />
              <span>India's Premier Sports Community</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-[1.05] drop-shadow-lg">
              Ride Together. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-orange-200">
                Run Further.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-12 font-medium leading-relaxed mix-blend-overlay">
              We are a movement. A community of cyclists and runners united by the open road and the shared sweat of the journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(249,115,22,0.3)] w-full sm:w-auto">
                Find Your Squad
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 rounded-full font-bold transition-all w-full sm:w-auto hover:border-white/20">
                Watch Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Featured Media Section (Social Feed) */}
      <FeaturedMedia />

      {/* Donate Section */}
      <Donate />

      {/* Social Connect Section (Integrations) */}
      <SocialConnect />

      {/* Footer */}
      <footer className="bg-neutral-950/80 border-t border-white/5 py-16 backdrop-blur-sm">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={iasLogo} alt="Indo Athletic Society Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold tracking-tight text-xl text-white/90">Indo Athletic Society</span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-8">
              Empowering India to stay fit through cycling and running. Join the revolution today.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm gap-4">
          <p>© 2024 Indo Athletic Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
