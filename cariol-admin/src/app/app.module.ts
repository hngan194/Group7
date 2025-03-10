import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';  
import { AppRoutingModule } from './app-routing.module';  
=======
import { FormsModule } from '@angular/forms';  // Đảm bảo đã import FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';  // Đảm bảo import đúng BlogComponent
import { AppRoutingModule } from './app-routing.module';  // Đảm bảo đã import AppRoutingModule
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
<<<<<<< HEAD
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [  // Chỉ khai báo Component không phải standalone
=======
@NgModule({
  declarations: [
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
    AppComponent,
    BlogComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
<<<<<<< HEAD
    RoleManagementComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,  
    AppRoutingModule,  
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductComponent,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    
=======
    RoleManagementComponent,  // Đảm bảo BlogComponent được khai báo
    // Các component khác
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Đảm bảo FormsModule được import
    AppRoutingModule,  // Đảm bảo AppRoutingModule đã được import
    RouterModule,  // Đảm bảo RouterModule đã được import
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // New way
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
