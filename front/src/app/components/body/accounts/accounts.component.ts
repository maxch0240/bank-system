import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account'
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts!: Account[];

  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
    this.listAccount();
  }

  listAccount() {
    this.accountService.getAccounts().subscribe(
      data => {
        this.accounts = data;
      }
    )
  }
}
