import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {LoginComponent} from './auth/login/login.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {HomeComponent} from './layout/home/home.component';
import {CartComponent} from './user/cart/cart.component';
import {LocationComponent} from './user/location/location.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'location', component: LocationComponent},
  // {path: 'forgot-password', component: ForgotPasswordComponent},
  {
    path: 'forgot-password',
    children: [
      {path: '', component: ForgotPasswordComponent},
      {path: '**', component: ForgotPasswordComponent},
    ]
  },


];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
