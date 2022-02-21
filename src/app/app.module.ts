import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TenantsComponent } from './tenants/tenants.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    TenantsComponent,
    InvoicesComponent,
    HomeComponent,
    AuthComponent,
    TenantHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
