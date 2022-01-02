import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TenantsComponent } from './tenants/tenants.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthComponent } from './auth/auth.component';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    TenantsComponent,
    InvoicesComponent,
    TransactionsComponent,
    AuthComponent,
    TenantHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
