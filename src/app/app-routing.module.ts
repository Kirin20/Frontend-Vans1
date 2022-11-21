import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'createCustomer', component:CreateCustomerComponent},
  {path: 'createCustomer/:id', component:CreateCustomerComponent},
  {path: 'updateCustomer', component:UpdateCustomerComponent},
  {path: 'updateCustomer/:id', component:UpdateCustomerComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
