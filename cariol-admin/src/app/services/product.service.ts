import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products'; 
  private categoryUrl = 'http://localhost:3000/api/categories';

  constructor(private _http: HttpClient) {}

  getProducts() {
    return this._http.get(this.apiUrl); 
  }

  getProductById(id: any) {
    return this._http.get(`${this.apiUrl}/${id}`); 
  }

  addProduct(product: any) {
    return this._http.post(this.apiUrl, product); 
  }

  updateProduct(id: any, product: any) {
    return this._http.patch(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: any) {
    return this._http.delete(`${this.apiUrl}/${id}`); 
  }

  getCategories(): Observable<any> { 
    return this._http.get<any>(this.categoryUrl);
  }
}
