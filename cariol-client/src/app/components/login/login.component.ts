<<<<<<< HEAD
=======
// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AlertService } from '../../services/alert.service';

// @Component({
//   selector: 'app-login',
//   standalone: false,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   @Output() close = new EventEmitter<void>();
//   @Output() switchPopup = new EventEmitter<string>();

//   loginForm!: FormGroup;
//   submitted = false;
//   loading = false;
//   errorMessage = '';

//   // 🔹 Danh sách tài khoản giả lập để kiểm tra
//   private dummyUsers = [
//     { phone: '0987654321', password: '12345678' },
//     { phone: '0912345678', password: 'password123' }
//   ];

//   constructor(
//     private formBuilder: FormBuilder,
//     private alertService: AlertService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       phone: ['', [Validators.required, Validators.pattern("^[0-9]{10,11}$")]],
//       password: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   get f() { return this.loginForm.controls; }

//   onSubmit() {
//     this.submitted = true;

//     if (this.loginForm.invalid) {
//       return;
//     }

//     this.loading = true;

//     const loginData = {
//       phone: this.loginForm.get('phone')?.value,
//       password: this.loginForm.get('password')?.value
//     };

//     console.log("Dữ liệu đăng nhập:", loginData);

//     // 🔹 Kiểm tra tài khoản có trong danh sách không
//     const user = this.dummyUsers.find(u => u.phone === loginData.phone && u.password === loginData.password);

//     if (user) {
//       this.alertService.success("Đăng nhập thành công!");
//       console.log("Đăng nhập thành công:", user);
//       this.router.navigate(['/dashboard']); // Chuyển hướng sau khi đăng nhập
//     } else {
//       this.errorMessage = "Số điện thoại hoặc mật khẩu không đúng!";
//       this.loading = false;
//     }
//   }

//   switchTo(type: string) {
//     this.switchPopup.emit(type);
//   }

//   closePopup() {
//     this.close.emit();
//   }
// }

>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
<<<<<<< HEAD
import { first } from 'rxjs';
=======
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() switchPopup = new EventEmitter<string>();

  loginForm!: FormGroup;
  submitted = false;
  loading = false;
<<<<<<< HEAD
  errorMessage: string = '';
=======
  errorMessage = '';

  private dummyUsers = [
    { phone: '0987654321', password: '12345678' },
    { phone: '0912345678', password: 'password123' }
  ];

>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {}

<<<<<<< HEAD
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

    console.log('🔹 loginForm đã khởi tạo:', this.loginForm.value);
  }

  get f(): { [key: string]: any } {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.alertService.clear();

    if (this.loginForm.invalid) {
      console.log('🔸 Form không hợp lệ:', this.loginForm.value);
      return;
    }

    console.log('🔹 Gửi request đăng nhập:', this.loginForm.value);

    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log('✅ Đăng nhập thành công:', response);
          localStorage.setItem('user', JSON.stringify(response)); // ✅ Lưu thông tin người dùng vào localStorage
          this.closePopup(); 
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('❌ Lỗi đăng nhập:', error);
          this.errorMessage = 'Sai thông tin đăng nhập! Vui lòng thử lại.';
          this.loading = false;
        }
      });
  }

  switchTo(type: string): void {
    this.switchPopup.emit(type);
  }

  closePopup(): void {
    this.close.emit();
  }
}
=======
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{10,11}$")]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    const loginData = {
      phone: this.loginForm.get('phone')?.value,
      password: this.loginForm.get('password')?.value
    };

    console.log("🔹 Gửi request đăng nhập:", loginData);

    this.authService.login(loginData.phone, loginData.password).subscribe({
      next: (user) => {
        console.log("✅ Đăng nhập thành công! API trả về:", user);
        this.alertService.success("Đăng nhập thành công!");

        setTimeout(() => {
          this.closePopup(); // ✅ Đóng popup sau khi đăng nhập
          this.router.navigate(['/dashboard']); // ✅ Chuyển hướng trang
        }, 1000);
      },
      error: (error) => {
        console.error("❌ Lỗi đăng nhập:", error);
        this.errorMessage = "Số điện thoại hoặc mật khẩu không đúng!";
        this.loading = false;
      }
    });
  }

  switchTo(type: string) {
    this.switchPopup.emit(type);
  }

  closePopup() {
    this.close.emit();
  }
}

>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
