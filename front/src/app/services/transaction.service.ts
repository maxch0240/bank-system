import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

const httpOptions = {
  headers: new  HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  private transactionUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }

  addTransaction(transaction: Transaction): Observable<string> {
    return this.http.post<string>(this.transactionUrl, transaction, httpOptions);
  }

  deleteTransaction(id: number): Observable<any> {
    return this.http.delete(`${this.transactionUrl}/${id}`, { responseType: 'text' });
  }
}
