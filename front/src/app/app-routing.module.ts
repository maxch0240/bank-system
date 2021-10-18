import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/body/accounts/accounts.component';
import { LoginComponent } from './components/body/login/login.component';
import { SignupComponent } from './components/body/signup/signup.component';
import { TransactionsComponent } from './components/body/transactions/transactions.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }