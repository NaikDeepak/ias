import { motion } from 'framer-motion';
import FeaturedMedia from './components/FeaturedMedia';
import SocialConnect from './components/SocialConnect';
import About from './components/About';
import Donate from './components/Donate';
import { Menu, Zap, UserCircle } from 'lucide-react';
import iasLogo from './assets/ias_logo.png';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white font-sans">

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={iasLogo} alt="Indo Athletic Society Logo" className="w-12 h-12 object-contain" />
            <span className="text-lg font-bold tracking-tight text-white">Indo Athletic Society</span>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Rides</a>
              <a href="#" className="hover:text-white transition-colors">Runs</a>
              <a href="#" className="hover:text-white transition-colors">Events</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <div className="h-4 w-px bg-white/10"></div>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-2">
                <UserCircle className="w-5 h-5" />
                Login
              </button>
              <button className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-neutral-200 transition-all font-semibold text-sm">
                Join Now
              </button>
            </div>

            <button className="md:hidden p-2 text-white/80 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Authentic outdoor group shot */}
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
            alt="Cyclists riding together at sunset"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-6 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Zap className="w-3 h-3 fill-current" />
              <span>India's Premier Sports Community</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.05]">
              Ride Together. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-orange-200">
                Run Further.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-12 font-medium leading-relaxed">
              We are a movement. A community of cyclists and runners united by the open road and the shared sweat of the journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.4)] w-full sm:w-auto">
                Find a Chapter Near You
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white border border-white/10 rounded-full font-bold transition-all w-full sm:w-auto">
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
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={iasLogo} alt="Indo Athletic Society Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold tracking-tight text-xl">Indo Athletic Society</span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-8">
              Empowering India to stay fit through cycling and running. Join the revolution today.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-sm gap-4">
          <p>© 2024 Indo Athletic Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
