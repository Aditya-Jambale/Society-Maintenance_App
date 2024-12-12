import { useState, useEffect } from 'react';
import { Building2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Building2 className={isScrolled ? 'text-blue-600' : 'text-white'} />
            <span className={cn(
              'font-bold text-lg',
              isScrolled ? 'text-gray-900' : 'text-white'
            )}>
              B5 Devgiri
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks isScrolled={isScrolled} />
            <Button
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Pay Maintenance
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              <NavLinks isMobile />
              <Button className="w-full" size="sm">
                Pay Maintenance
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLinks({ isScrolled = false, isMobile = false }) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#features', label: 'Features' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors duration-200',
            isMobile
              ? 'block text-gray-900 hover:text-blue-600'
              : cn(
                  'hover:text-blue-600',
                  isScrolled ? 'text-gray-600' : 'text-white'
                )
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}