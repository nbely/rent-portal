import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { TenantsComponent } from './tenants/tenants.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'rooms', component: RoomsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tenant-home', component: TenantHomeComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
