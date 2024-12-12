import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Download, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { PaymentReceipt as PaymentReceiptType } from '../../types/user';
import { generatePDF } from '../../utils/pdf';

interface PaymentReceiptProps {
  receipt: PaymentReceiptType;
  userData: {
    name: string;
    flatNumber: string;
    email: string;
  };
}

export function PaymentReceipt({ receipt, userData }: PaymentReceiptProps) {
  const handleDownload = () => {
    generatePDF(receipt, userData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <Card variant="glass" className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold text-green-700">Payment Successful</h2>
          </div>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Receipt No.</p>
              <p className="font-semibold">{receipt.id}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-semibold">{format(receipt.date, 'PPP')}</p>
            </div>
            <div>
              <p className="text-gray-600">Flat Number</p>
              <p className="font-semibold">{userData.flatNumber}</p>
            </div>
            <div>
              <p className="text-gray-600">Payment Method</p>
              <p className="font-semibold">{receipt.paymentMethod}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Payment Details</h3>
            <div className="space-y-2">
              {receipt.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">{item.label}</span>
                  <span>₹{item.amount}</span>
                </div>
              ))}
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>₹{receipt.amount}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-6">
            <p className="text-sm text-gray-600">
              Transaction ID: {receipt.transactionId}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}