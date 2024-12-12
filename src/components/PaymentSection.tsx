import { CreditCard, Calendar } from 'lucide-react';
import { Button } from './Button';

export function PaymentSection() {
  return (
    <div id="payment" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Maintenance Payment</h2>
          <p className="mt-4 text-lg text-gray-600">
            Quick and secure payment processing for your monthly maintenance
          </p>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Monthly Maintenance Details
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-600">
                    <li>• Basic Maintenance: ₹3,000</li>
                    <li>• Security Charges: ₹1,000</li>
                    <li>• Sinking Fund: ₹500</li>
                    <li>• Water Charges: ₹500</li>
                  </ul>
                </div>
                <div className="border-t pt-6">
                  <p className="text-xl font-bold">Total Amount: ₹5,000</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Options
                </h3>
                <div className="space-y-4">
                  <Button className="w-full">Pay with UPI</Button>
                  <Button variant="secondary" className="w-full">
                    Pay with Card
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Secure payment processing. Your financial information is encrypted and protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}