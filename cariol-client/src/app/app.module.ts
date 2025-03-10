import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule nếu cần
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule thay vì RouterModule.forRoot()
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Nếu bạn sử dụng animations
// Các components
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SigninAccountComponent } from './components/signin-account/signin-account.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
import { CommonQuestionComponent } from './components/common-question/common-question.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    BlogComponent,
    AboutusComponent,
    AppComponent,
=======
import { CartComponent } from './components/cart/cart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';

// Các service
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    BlogComponent,
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CartComponent,
<<<<<<< HEAD
    ProductDetailsComponent,
    OrderComponent,
    PaymentComponent,
    HomepageComponent,
    SigninAccountComponent,
    FooterComponent,
  ],
  
  imports: [
    BrowserModule,
    CommonModule, // Thêm CommonModule vào imports
    RouterModule.forRoot([]),// Thêm RouterModule nếu bạn sử dụng routing
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SidebarComponent,
    DashboardChangePasswordComponent,
    CommonQuestionComponent,
  ],

  providers: [AuthService, AlertService, ProductService, CartService, DashboardService], // Thêm các service vào đây nếu cần
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }
=======
    HomepageComponent,
    ProductDetailsComponent,
    OrderComponent,
    PaymentComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, // Đảm bảo đã import AppRoutingModule thay vì RouterModule.forRoot([])
    BrowserAnimationsModule // Nếu có dùng animations
  ],
  providers: [AuthService, AlertService, ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
