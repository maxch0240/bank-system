import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionInfo } from 'src/app/models/transactionInfo';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  createTransactionFailed: boolean = false;

  form: any = {};
  transactionInfo!: TransactionInfo;
  errorMessage = '';

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.transactionInfo = new TransactionInfo(
      this.form.account_id1,
      this.form.account_id2,
      this.form.amount,
      );


    this.transactionService.addTransaction(this.transactionInfo).subscribe(
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
