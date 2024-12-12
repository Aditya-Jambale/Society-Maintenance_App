import { Building2 } from 'lucide-react';
import { Button } from './Button';

export function Hero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
          alt="Modern apartment building"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            B5 Devgiri Society
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl">
            Welcome to our vibrant community where comfort meets convenience. 
            Experience modern living with exceptional amenities and a strong sense of community.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Button onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}>
              Pay Maintenance
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}