import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Account } from "../models/account";
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new  HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountUrl = 'http://localhost:8080/api/accounts';

  constructor(private http: HttpClient) {
  }

  getOneAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.accountUrl}/${id}`);
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl);
  }

  addAccount(account: Account): Observable<string> {
    return this.http.post<string>(this.accountUrl, account, httpOptions);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.accountUrl}/${id}`, { responseType: 'text' });
  }

  updateAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.accountUrl}/${id}`, value);
  }

}

