import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';  
import { AppRoutingModule } from './app-routing.module';  
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RoleManagementComponent } from './components/role-management/role-management.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [  // Chỉ khai báo Component không phải standalone
    AppComponent,
    BlogComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
