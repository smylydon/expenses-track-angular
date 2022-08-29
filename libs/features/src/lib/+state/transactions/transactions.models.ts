/**
 * Interface for the 'Transaction' data
 */
export interface TransactionsEntity {
  _id: string; // Primary ID
  name: string;
  type: string;
  amount: number;
  date: string;
}
