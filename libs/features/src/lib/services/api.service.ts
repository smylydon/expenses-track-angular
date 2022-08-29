import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LabelsEntity } from '../+state/labels/labels.models';
import { TransactionsEntity } from '../+state/transactions/transactions.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllLabels(): Observable<LabelsEntity[]> {
    return this.http.get<LabelsEntity[]>('labels').pipe(
      map((response: any) => {
        console.log(response);
        return response as LabelsEntity[];
      })
    );
  }
  deleteLabel(id: string): Observable<string> {
    const body = { _id: id };
    return this.http.delete<string>('labels', { body }).pipe(
      map((response: any) => {
        console.log(response);
        return response as string;
      })
    );
  }

  addTransaction(model: TransactionsEntity): Observable<string> {
    console.log(model);
    return this.http.post<string>('transaction', JSON.stringify(model)).pipe(
      map((response: any) => {
        console.log(response);
        return response as string;
      })
    );
  }

  getAllTransactions(): Observable<TransactionsEntity[]> {
    return this.http
      .get<TransactionsEntity[]>('transaction')
      .pipe(
        map((response: any) => (response.data as TransactionsEntity[]) || [])
      );
  }

  deleteTransaction(id: string): Observable<string> {
    const body = { _id: id };
    return this.http.delete<string>('transaction', { body }).pipe(
      map((response: any) => {
        console.log(response);
        return response as string;
      })
    );
  }
}
