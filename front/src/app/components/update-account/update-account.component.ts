import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountInfo } from 'src/app/models/accountInfo';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  id!: number;
  form: any = {};
  accountInfo!: AccountInfo;
  errorMessage = '';

  constructor(private accountService: AccountService, private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   }

  onSubmit() {
    this.accountInfo = new AccountInfo(
      this.form.name,
      this.form.amount);

    this.accountService.updateAccount(this.id,this.accountInfo).subscribe();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/accounts']);
  }
}
