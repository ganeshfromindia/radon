import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CustomersServiceResolver } from './customers/customers.resolver.service';


@NgModule({
  declarations: [
    AppComponent,
	CustomersComponent,
	CustomerComponent,
	LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [AuthGuard, AuthService, CustomersServiceResolver, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
