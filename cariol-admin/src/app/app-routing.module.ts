import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component'; 
import { LoginComponent } from './components/login/login.component';
import {RoleManagementComponent} from'./components/role-management/role-management.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  { path: 'role-management', component: RoleManagementComponent },
  {path : "product", component: ProductComponent},
  {path: 'login', component: LoginComponent},
  { path: 'blog', component: BlogComponent },  // Route cho BlogComponent
  // { path: '', redirectTo: '/blogs', pathMatch: 'full' },  // Route mặc định để hiển thị BlogComponent ngay khi vào ứng dụng
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Đảm bảo bạn sử dụng forRoot để cấu hình routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
