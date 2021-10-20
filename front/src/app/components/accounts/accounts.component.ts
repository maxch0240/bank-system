import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account'
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts!: Account[];

  constructor(private accountService : AccountService, private router: Router) { }

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

  reloadData() {
    this.listAccount();
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateAccount(id: number){
    this.router.navigate(['update-account', id]);
  }
}
