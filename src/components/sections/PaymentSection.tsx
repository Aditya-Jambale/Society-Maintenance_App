import { motion } from 'framer-motion';
import { CreditCard, IndianRupee, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { MovingBorder } from '../ui/aceternity/moving-border';
import { SparklesCore } from '../ui/aceternity/sparkles';

const handleUPIPayment = () => {
  const upiUrl = "upi://pay?pa=adityajambale@kotak&pn=B5 DEVGIRI SOCIETY&cu=INR&am=3000";
  window.location.href = upiUrl;
};

const maintenanceItems = [
  { label: 'Basic Maintenance', amount: 1000, description: 'General upkeep and repairs' },
  { label: 'Security Charges', amount: 1000, description: '24/7 security personnel and CCTV' },
  { label: 'Sinking Fund', amount: 500, description: 'Future major repairs and renovations' },
  { label: 'Housekeeping', amount: 500, description: 'Common area cleaning and maintenance' },
];

export function PaymentSection() {
  return (
    <section id="payment" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={10}
        className="absolute inset-0"
        particleColor="#60A5FA"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold sm:text-5xl mb-4">
            <span className="text-gradient">Maintenance</span> Payment
          </h2>
          <p className="text-lg text-gray-600">
            Simple, secure, and convenient payment options for your monthly maintenance
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MovingBorder duration={3000} className="h-full">
            <Card variant="glass" className="p-8 bg-white/90 backdrop-blur-lg h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Maintenance Details</h3>
                <IndianRupee className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="space-y-6">
                {maintenanceItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-blue-50/50 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.label}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="font-bold text-blue-600">₹{item.amount}</span>
                    </div>
                  </motion.div>
                ))}
                
                <div className="mt-6 p-4 rounded-lg bg-blue-600 text-white">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Amount</span>
                    <span className="text-2xl font-bold">₹3,000</span>
                  </div>
                </div>
              </div>
            </Card>
          </MovingBorder>

          <MovingBorder duration={3000} className="h-full">
            <Card variant="glass" className="p-8 bg-white/90 backdrop-blur-lg h-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Payment Options</h3>
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer"
                  onClick={handleUPIPayment}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-lg mb-1">UPI Payment</h4>
                      <p className="text-sm text-blue-100">Quick and secure payment via UPI</p>
                    </div>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
                      alt="UPI"
                      className="h-8 bg-white p-1 rounded"
                    />
                  </div>
                </motion.div>
                
                <div className="p-4 rounded-lg bg-gray-100 opacity-75 cursor-not-allowed">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-600">Card Payment</h4>
                      <p className="text-sm text-gray-500">Coming soon</p>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        alt="Visa"
                        className="h-8 opacity-50"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="Mastercard"
                        className="h-8 opacity-50"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span>Instant payment confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>Bank-grade security</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span>24/7 payment support</span>
                  </div>
                </div>
              </div>
            </Card>
          </MovingBorder>
        </div>
      </div>
    </section>
  );
}