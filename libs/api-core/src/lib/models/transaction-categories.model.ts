import { Categories, Transaction } from '../schemas';

export interface TransactionCategories extends Transaction {
  _id: string;
  categories_info: Categories;
}
