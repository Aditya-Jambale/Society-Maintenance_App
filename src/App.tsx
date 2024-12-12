import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { PaymentSection } from './components/sections/PaymentSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PaymentSection />
      <Footer />
    </div>
  );
}

export default App;