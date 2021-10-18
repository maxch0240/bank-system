import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../models/account";
import {map} from "rxjs/operators";

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

}

