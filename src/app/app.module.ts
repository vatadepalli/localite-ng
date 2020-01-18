import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChangePasswordComponent} from './components/auth/change-password/change-password.component';
import {ForgotPasswordComponent} from './components/auth/forgot-password/forgot-password.component';
import {LoginComponent} from './components/auth/login/login.component';
import {LogoutComponent} from './components/auth/logout/logout.component';
import {UsersComponent} from './components/auth/users/users.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HomeComponent} from './components/layout/home/home.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {SearchComponent} from './components/layout/search/search.component';
import {SliderComponent} from './components/layout/slider/slider.component';
import {ProductCategoriesComponent} from './components/store/products/product-categories/product-categories.component';
import {ProductDetailsComponent} from './components/store/products/product-details/product-details.component';
import {ProductListComponent} from './components/store/products/product-list/product-list.component';
import {ProductsComponent} from './components/store/products/products.component';
import {ShopDetailsComponent} from './components/store/products/shop-details/shop-details.component';
import {ServiceListComponent} from './components/store/services/service-list/service-list.component';
import {ServicesComponent} from './components/store/services/services.component';
import {TechnicianDetailsComponent} from './components/store/services/technician-details/technician-details.component';
import {CartComponent} from './components/user/cart/cart.component';
import {LocationComponent} from './components/user/location/location.component';
import {OrdersComponent} from './components/user/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ChangePasswordComponent,
    UsersComponent,
    FooterComponent,
    LogoutComponent,
    CartComponent,
    LocationComponent,
    SearchComponent,
    SliderComponent,
    ForgotPasswordComponent,
    OrdersComponent,
    ProductsComponent,
    ServicesComponent,
    ShopDetailsComponent,
    ProductListComponent,
    ProductCategoriesComponent,
    ProductDetailsComponent,
    ServiceListComponent,
    TechnicianDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
