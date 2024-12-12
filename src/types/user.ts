export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  flatNumber: string;
  phoneNumber: string;
}

export interface PaymentReceipt {
  id: string;
  userId: string;
  amount: number;
  date: Date;
  items: {
    label: string;
    amount: number;
  }[];
  paymentMethod: string;
  transactionId: string;
  status: 'success' | 'pending' | 'failed';
}