import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { BlogComponent } from './components/blog/blog.component'; 
import { LoginComponent } from './components/login/login.component';
import {RoleManagementComponent} from'./components/role-management/role-management.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  { path: 'role-management', component: RoleManagementComponent },
  {path : "product", component: ProductComponent},
=======
import { BlogComponent } from './components/blog/blog.component';  // Import BlogComponent
import { LoginComponent } from './components/login/login.component';
import {RoleManagementComponent} from'./components/role-management/role-management.component';

const routes: Routes = [
  { path: 'role-management', component: RoleManagementComponent },
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  {path: 'login', component: LoginComponent},
  { path: 'blog', component: BlogComponent },  // Route cho BlogComponent
  // { path: '', redirectTo: '/blogs', pathMatch: 'full' },  // Route mặc định để hiển thị BlogComponent ngay khi vào ứng dụng
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Đảm bảo bạn sử dụng forRoot để cấu hình routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
