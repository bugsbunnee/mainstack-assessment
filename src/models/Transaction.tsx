export interface Transaction {
    amount: number;
    date: string;
    metadata?: {name: string; type: string; email: string; quantity: number; country: string;}
    payment_reference?: string;
    status: string;
    type: "deposit" | "withdrawal";
}