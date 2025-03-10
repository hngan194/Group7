<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

@Component({
  selector: 'app-forgot-password',
  standalone: false,
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
<<<<<<< HEAD
export class ForgotPasswordComponent {
  @Output() close = new EventEmitter<void>();
  @Output() switchPopup = new EventEmitter<string>();

=======
export class ForgotPasswordComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() switchPopup = new EventEmitter<string>();

  forgotPasswordForm!: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      identifier: ['', Validators.required]  // Cho phép nhập số điện thoại hoặc email
    });
  }

  get f() {
    return this.forgotPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
  
    if (this.forgotPasswordForm.invalid) {
      return;
    }
  
    const identifier = this.forgotPasswordForm.get('identifier')?.value.trim();
    console.log("🔹 Kiểm tra dữ liệu giả lập với:", identifier);
  
    // 🔹 Danh sách tài khoản giả lập (để kiểm tra trước khi gửi API)
    const dummyUsers = [
      { phone: '0987654321', email: 'test1@example.com' },
      { phone: '0912345678', email: 'test2@example.com' }
    ];
  
    // 🔹 Kiểm tra nếu số điện thoại hoặc email có trong danh sách giả lập
    const userExists = dummyUsers.some(user => user.phone === identifier || user.email === identifier);
  
    if (userExists) {
      console.log("✅ Tài khoản hợp lệ, giả lập gửi email thành công!");
      this.successMessage = "Email hoặc SMS khôi phục mật khẩu đã được gửi. Vui lòng kiểm tra!";
      return;
    } else {
      console.error("❌ Tài khoản không tồn tại!");
      this.errorMessage = "Tài khoản không tồn tại!";
      return;
    }
  }
  

>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  switchTo(type: string) {
    this.switchPopup.emit(type);
  }

  closePopup() {
<<<<<<< HEAD
    this.close.emit();  // ✅ Gọi emit() thay vì gọi close()
=======
    this.close.emit();
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  }
}
