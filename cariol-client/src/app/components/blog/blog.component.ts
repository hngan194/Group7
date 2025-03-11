import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';  // Import BlogService
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any[] = [];  // Mảng để lưu danh sách các blog

  constructor(private blogService: BlogService, private router: Router) { }

<<<<<<< HEAD
  ngOnInit(): void {
    // Gọi hàm getBlogs() để lấy danh sách blog
    this.blogService.getBlogs().subscribe(
      (data: any[]) => {
        this.blogs = data;  // Lưu dữ liệu vào mảng blogs
      },
      error => {
        console.error("Có lỗi khi lấy dữ liệu blog:", error);
=======
  ngOnInit() {
    this._bservice.getBlogs().subscribe({
      next: (data) => { this.blogs = data; },
      error: (err) => { console.log(err); }
    });

    this._activatedRoute.paramMap.subscribe((params) => {
      let code = params.get("_id");
      if (code != null) {
        this.selectedCode = code;
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
      }
    );
  }

<<<<<<< HEAD
  // Hàm xử lý khi click vào một bài blog
  onBlogClick(blogId: string): void {
    this.router.navigate(['/blog-detail', blogId]);  // Điều hướng đến blog detail với blogId
=======
  someFunction(blog: any): void {
    this._router.navigate(["/blogs", blog._id]);
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  }
}