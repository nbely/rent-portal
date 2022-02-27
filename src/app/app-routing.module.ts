import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesComponent } from './pages/invoices/invoices.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HomeComponent } from './pages/home/home.component';
import { TenantHomeComponent } from './pages/tenant-home/tenant-home.component';
import { TenantsComponent } from './pages/tenants/tenants.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'rooms', component: RoomsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tenant-home', component: TenantHomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
