export interface ExpenseRecord {
    id?: number;
    description: string;
    totalAmount: number;
    paidBy: string;
    date?: string;
    isSettled: boolean;
}