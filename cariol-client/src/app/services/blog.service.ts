import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'http://localhost:3002/blogs';  // Đảm bảo URL đúng

  constructor(private http: HttpClient) { }

  // Hàm để lấy danh sách blog từ server
  getBlogs(): Observable<any> {
    console.log('Đang gọi API:', this.apiUrl);  // Log URL gọi API
    return this.http.get(this.apiUrl);  // Gọi API server MongoDB
  }
  // Hàm để lấy thông tin chi tiết của một blog
  getBlogById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);  // Gọi API để lấy blog theo id
  }
}
