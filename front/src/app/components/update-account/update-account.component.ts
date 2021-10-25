import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  id!: number;
  form: any = {};
  account: Account = {id: 0, name: "", amount: 0};

  constructor(private accountService: AccountService, private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.account = new Account();

    this.accountService.getOneAccount(this.id).subscribe(acc => this.account = acc)
   }
   

  onSubmit() {
    // this.accountInfo = new AccountInfo(
    //   this.form.name,
    //   this.form.amount);

    this.accountService.updateAccount(this.id,this.account).subscribe();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }
}
