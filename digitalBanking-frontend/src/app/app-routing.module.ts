import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {AddCustomerComponent} from "./add-customer/add-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: "", redirectTo:"/login", pathMatch:"full"},
  { path: "admin", component:AdminTemplateComponent, canActivate:[AuthenticationGuard],
    children: [
      { path: 'customers', component: CustomersComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'add-customer', component: AddCustomerComponent },
      { path: 'update-customer/:id', component: UpdateCustomerComponent },
      { path: 'customer-accounts/:id', component: CustomerAccountComponent },
    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
