import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Account } from "../models/account";
import { Observable } from 'rxjs';
import { AccountInfo } from '../models/accountInfo';


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

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl);
  }

  addAccount(info: AccountInfo): Observable<string> {
    return this.http.post<string>(this.accountUrl, info, httpOptions);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.accountUrl}/${id}`, { responseType: 'text' });
  }

  updateAccount(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.accountUrl}/${id}`, value);
  }

}

