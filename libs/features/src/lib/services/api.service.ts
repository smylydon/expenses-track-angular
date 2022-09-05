import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabelsEntity } from '../+state/labels/labels.models';
import { TransactionsEntity } from '../+state/transactions/transactions.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllLabels(): Observable<LabelsEntity[]> {
    return this.http.get<LabelsEntity[]>('label').pipe(
      map((response: any) => {
        return response as LabelsEntity[];
      })
    );
  }
  deleteLabel(id: string): Observable<string> {
    const body = { _id: id };
    return this.http.delete<string>('labels', { body }).pipe(
      map((response: any) => {
        return response as string;
      })
    );
  }

  addTransaction(
    model: TransactionsEntity
  ): Observable<TransactionsEntity | HttpErrorResponse> {
    const body = { ...model };
    return this.http.post<TransactionsEntity>('transaction', body);
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
        return response as string;
      })
    );
  }
}
