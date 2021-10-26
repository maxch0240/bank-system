import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'update-account/:id', component: UpdateAccountComponent },
  { path: 'add-transaction', component: AddTransactionComponent},
  { path: '', redirectTo: 'accounts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }