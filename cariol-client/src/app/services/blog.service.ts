import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

=======
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, tap, throwError } from 'rxjs';
import { Blog } from '../../app/models/blog';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
@Injectable({
  providedIn: 'root'
})
export class BlogService {

<<<<<<< HEAD
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
=======
  private apiUrl: string = 'http://localhost:3000/api';
  private blog$: Observable<Blog[]>;

  constructor(private httpClient: HttpClient) {
    this.blog$ = this.httpClient.get<any>(`${this.apiUrl}/blog`).pipe(
      map(response => response.data),
      retry(2),
      catchError(this.handleError)
    );
  }
  
  getBlogs(): Observable<Blog[]> {
    return this.blog$;
  }

  getBlogDetails(id: string): Observable<Blog> {
    return this.blog$.pipe(
      map((products: Blog[]) => {
        const foundProduct = products.find(product => product._id === id);
        if (foundProduct) {
          return foundProduct;
        } else {
          throw new Error(`Blog with ID ${id} not found`);
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  }

}