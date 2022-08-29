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

  getAllTransactions(): Observable<TransactionsEntity[]> {
    return this.http
      .get<TransactionsEntity[]>('transaction')
      .pipe(
        map((response: any) => (response.data as TransactionsEntity[]) || [])
      );
  }
}
