import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountInfo } from 'src/app/models/accountInfo';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  form: any = {};
  accountInfo!: AccountInfo;
  errorMessage = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.accountInfo = new AccountInfo(
      this.form.name,
      this.form.amount);

    this.accountService.addAccount(this.accountInfo).subscribe();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }
}
