import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomersServiceResolver } from './customers/customers.resolver.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard]},
  { path: 'customers/add', component: CustomerComponent, canActivate: [AuthGuard]},
  { path: 'customers/edit/:id', component: CustomerComponent , canActivate: [AuthGuard], resolve: {customer: CustomersServiceResolver} }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
