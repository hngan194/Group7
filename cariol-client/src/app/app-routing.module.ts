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
import { ProductsComponent } from './components/products/products.component';
<<<<<<< HEAD
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
=======

>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
const routes : Routes = [
  { path: "aboutus", component: AboutusComponent },
  { path: "blog", component: BlogComponent},
  { path: '', component: HomepageComponent }, // Trang chủ
  { path: 'blog-detail/:id', component: BlogDetailComponent },  // Thêm route cho blog detail
  { path: 'product/:id', component: ProductDetailsComponent }, // Chi tiết sản phẩm
  { path: 'order', component: OrderComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent}

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