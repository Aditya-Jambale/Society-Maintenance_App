import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center hero-pattern">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
          alt="Modern apartment building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start mb-6 gap-3">
              <Building2 className="w-8 h-8 text-blue-400 floating" />
              <span className="text-blue-400 font-medium">Welcome to</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="text-gradient">B5 Devgiri</span> Society
            </h1>
            
            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              Experience modern living at its finest with our premium amenities and 
              strong community values.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group glass"
                onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Pay Maintenance
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Modern building"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}