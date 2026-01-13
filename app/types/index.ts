export interface category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updateArt: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updateArt: string;
  category : category;
  stock: number;
  price: number;
}

export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updateArt: string;

}

export interface Transaction {
  _id: string;
  paymentproof: string;
  status: "pending" | "paid" | "rejected";
  purchasedItems: {
    productId: string;
    qty: number;
  };
  totalPayment: string;
  customerName: string;
  customerContact: number | null;
  customerAddress: string;
  createdAt: string;
  updateArt: string;
}
