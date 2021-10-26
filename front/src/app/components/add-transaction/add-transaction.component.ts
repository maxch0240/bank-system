import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { AccountService } from 'src/app/services/account.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  createTransactionFailed: boolean = false;

  accounts!: Account[];
  selectedAccountId1!: number;
  selectedAccountId2!: number;
  form: any = {};
  transaction!: Transaction;
  errorMessage = '';

  constructor(private transactionService: TransactionService, private router: Router,
    private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
      data => (this.accounts = data)
    );
  }

  onSubmit() {
    this.transaction = new Transaction();

    this.transaction.account_id1 = this.selectedAccountId1;
    this.transaction.account_id2 = this.selectedAccountId2;
    this.transaction.amount = this.form.amount;

    this.transactionService.addTransaction(this.transaction).subscribe(
      result => {
      },
      error => { 
      this.createTransactionFailed = true;
    });      
    this.gotoList();
    
  }

  gotoList() {
    if(!this.createTransactionFailed) this.router.navigate(['/transactions']);
  }


  selectAccountId1(event: any) {
    console.log(this.selectedAccountId1)
  }

  selectAccountId2(event: any) {
    console.log(this.selectedAccountId2)
  }

  checkSelectedAccounts() {
    return (this.selectedAccountId1 === this.selectedAccountId2 ||
       !this.selectedAccountId1 || !this.selectedAccountId2);
  }

}
