import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions!: Transaction[];

  constructor(private transactionService : TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.listTransaction();
  }

  listTransaction() {
    this.transactionService.getTransactions().subscribe(
      data => {
        console.log(data)
        this.transactions = data;
      }
    )
  }

  reloadData() {
    this.listTransaction();
  }

  deleteTransaction(id: number) {
    this.transactionService.deleteTransaction(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
