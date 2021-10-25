import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  form: any = {};
  account!: Account;
  errorMessage = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.account = new Account
    
    this.account.name =  this.form.name,
    this.account.amount = this.form.amount;

    this.accountService.addAccount(this.account).subscribe();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }
}
