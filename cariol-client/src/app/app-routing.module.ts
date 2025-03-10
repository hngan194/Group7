import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrderComponent } from './components/order/order.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CategoriesComponent } from './components/categories/categories.component';
<<<<<<< HEAD
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
import { CommonQuestionComponent } from './components/common-question/common-question.component';
import { SigninAccountComponent } from './components/signin-account/signin-account.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
=======
import { ProductsComponent } from './components/products/products.component';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

const routes : Routes = [
  { path: "aboutus", component: AboutusComponent },
  { path: "blog", component: BlogComponent},
<<<<<<< HEAD
  { path: 'homepage', component: HomepageComponent }, // Trang chủ
=======
  { path: '', component: HomepageComponent }, // Trang chủ
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  { path: 'product/:id', component: ProductDetailsComponent }, // Chi tiết sản phẩm
  { path: 'order', component: OrderComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'categories', component: CategoriesComponent },
<<<<<<< HEAD
  { path: 'dashboard-change-password', component: DashboardChangePasswordComponent },
  { path: 'common-question', component: CommonQuestionComponent },
  { path: 'signin', component: SigninAccountComponent },
  { path: 'dashboard-edit-profile', component: DashboardEditProfileComponent },
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' }, // Trang mặc định
  { path: '**', redirectTo: '/aboutus' } // Nếu nhập sai URL, tự động về About Us
=======
  { path: 'products', component: ProductsComponent}
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }