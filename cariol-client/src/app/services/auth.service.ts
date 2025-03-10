import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000/api/auth'; // API backend

  private userSubject: BehaviorSubject<any | null>;
  public user: Observable<any | null>;

  constructor(
    private _http: HttpClient,
    private _router: Router,
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  // 🔹 Đăng nhập
  login(phone: string, password: string) {
    console.log('🔹 Gửi request đăng nhập:', { phone, password });

    return this._http.post<any>(`${this.url}/signin`, { phone, password })
      .pipe(map(user => {
        console.log('✅ API trả về:', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  // 🔹 Đăng xuất
  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this._router.navigate(['/login']);
  }

  // 🔹 Kiểm tra tài khoản trước khi đăng ký
  checkUserExists(phone: string, email: string) {
    console.log('🔹 Kiểm tra tài khoản tồn tại với:', { phone, email });

    return this._http.post<boolean>(`${this.url}/check-user`, { phone, email });
  }

  // 🔹 Đăng ký tài khoản
  register(user: any) {
    console.log("🔹 Gửi request đăng ký:", user);
    return this._http.post(`${this.url}/signup`, user);
  }

  // 🔹 Reset mật khẩu
  resetPassword(email: string) {
    return this._http.post(`${this.url}/forgot-password`, { email });
  }
}
