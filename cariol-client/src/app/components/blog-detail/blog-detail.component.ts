import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute
import { BlogService } from '../../services/blog.service';  // Import BlogService

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: any = {};  // Mảng lưu thông tin của blog

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    console.log('Blog ID từ URL:', blogId);  // Kiểm tra blogId
  
    if (blogId) {
      this.blogService.getBlogById(blogId).subscribe(
        (data) => {
          console.log('Dữ liệu blog nhận được:', data);  // Kiểm tra dữ liệu trả về từ API
          this.blog = data;  // Lưu vào biến blog
        },
        (error) => {
          console.error('Không thể lấy dữ liệu blog chi tiết', error);
        }
      );
    }
  }
}
