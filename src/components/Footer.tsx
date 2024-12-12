import { Building2, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              <span className="font-bold text-white">B5 Devgiri Society</span>
            </div>
            <p className="mt-4">
              Creating a better living experience for our community members.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:contact@b5devgiri.com">contact@b5devgiri.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#payment" className="hover:text-white transition-colors">
                  Pay Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Society Rules
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} B5 Devgiri Society. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}