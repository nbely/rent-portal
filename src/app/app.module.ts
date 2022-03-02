import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { TenantsComponent } from './pages/tenants/tenants.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { HomeComponent } from './pages/home/home.component';
import { TenantHomeComponent } from './pages/tenant-home/tenant-home.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    TenantsComponent,
    InvoicesComponent,
    HomeComponent,
    TenantHomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
