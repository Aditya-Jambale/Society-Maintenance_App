import { jsPDF } from 'jspdf';
import { format } from 'date-fns';
import { PaymentReceipt } from '../types/user';

export const generatePDF = (
  receipt: PaymentReceipt,
  userData: { name: string; flatNumber: string; email: string }
) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFontSize(20);
  doc.text('B5 Devgiri Society', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text('Payment Receipt', pageWidth / 2, 30, { align: 'center' });
  
  // User Details
  doc.setFontSize(10);
  doc.text(`Name: ${userData.name}`, 20, 50);
  doc.text(`Flat Number: ${userData.flatNumber}`, 20, 60);
  doc.text(`Email: ${userData.email}`, 20, 70);
  
  // Receipt Details
  doc.text(`Receipt No: ${receipt.id}`, 20, 90);
  doc.text(`Date: ${format(receipt.date, 'PPP')}`, 20, 100);
  doc.text(`Payment Method: ${receipt.paymentMethod}`, 20, 110);
  
  // Payment Items
  let yPos = 130;
  doc.text('Payment Details:', 20, yPos);
  yPos += 10;
  
  receipt.items.forEach(item => {
    doc.text(`${item.label}: ₹${item.amount}`, 20, yPos);
    yPos += 10;
  });
  
  // Total
  doc.text(`Total Amount: ₹${receipt.amount}`, 20, yPos + 10);
  
  // Transaction ID
  doc.text(`Transaction ID: ${receipt.transactionId}`, 20, yPos + 30);
  
  // Save PDF
  doc.save(`B5_Devgiri_Receipt_${receipt.id}.pdf`);
};