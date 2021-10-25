import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';

import { AccountsComponent } from './components/accounts/accounts.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AddAccountComponent } from './components/add-account/add-account.component';
import { FormsModule } from '@angular/forms';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    TransactionsComponent,
    AddAccountComponent,
    UpdateAccountComponent,
    AddTransactionComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
