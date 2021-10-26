import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  createTransactionFailed: boolean = false;

  form: any = {};
  transaction!: Transaction;
  errorMessage = '';

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.transaction = new Transaction();

    this.transaction.account_id1 = this.form.account_id1;
    this.transaction.account_id2 = this.form.account_id2;
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
}
