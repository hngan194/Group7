import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


interface Product {
  _id?: string;
  name: string;
  amount: number;
  price: number;
  description: string;
  categoryId: string;
  image: string;
}


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class ProductComponent implements OnInit {
  data: Product[] = [];
  categories: { id: string; name: string }[] = [];
  errorMessage: string = '';
  loading: boolean = false;


  selectedProduct: Product = this.getEmptyProduct();
  newProduct: Product = this.getEmptyProduct();


constructor(private _service: ProductService, private toastr: ToastrService) {}


  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts(): void {
    this.loading = true;
    this._service.getProducts()
      .pipe(
        catchError((err) => {
          this.errorMessage = 'Error fetching products';
          this.toastr.error(this.errorMessage, 'Error');
          console.error('API Error:', err);
          this.loading = false;
          return of([]);
        })
      )
      .subscribe((res: any) => {
        console.log('API Response:', res);
        this.data = res?.data?.docs || [];
        this.loading = false;
      });
  }


  getCategories(): void {
    this._service.getCategories()
      .pipe(
        catchError((err) => {
          this.toastr.error('Error fetching categories', 'Error');
          console.error('API Error:', err);
          return of([]);
        })
      )
      .subscribe((res: any) => {
        console.log('Categories Response:', res);
        this.categories = res?.data || [];
      });
  }


  createProduct(): void {
    if (this.loading) return;
    this.loading = true;
   
    this._service.addProduct(this.newProduct)
      .pipe(
        catchError((err) => {
          this.toastr.error('Error creating product', 'Error');
          console.error('API Error:', err);
          this.loading = false;
          return of(null);
        })
      )
      .subscribe(() => {
        this.getProducts();
        this.toastr.success('Product created successfully', 'Success');
        this.resetForm();
        this.loading = false;
      });
  }


  editProduct(product: Product): void {
    this.selectedProduct = { ...product };
  }


  updateProduct(): void {
    if (!this.selectedProduct._id || this.loading) return;
    this.loading = true;


    this._service.updateProduct(this.selectedProduct._id, this.selectedProduct)
      .pipe(
        catchError((err) => {
          this.toastr.error('Error updating product', 'Error');
          console.error('API Error:', err);
          this.loading = false;
          return of(null);
        })
      )
      .subscribe(() => {
        this.getProducts();
        this.toastr.success('Product updated successfully', 'Success');
        this.resetForm();
        this.loading = false;
      });
  }


  deleteProduct(product: Product): void {
    if (!product._id || !window.confirm('Are you sure you want to delete this product?')) return;
    this.loading = true;


    this._service.deleteProduct(product._id)
      .pipe(
        catchError((err) => {
          this.toastr.error('Error deleting product', 'Error');
          console.error('API Error:', err);
          this.loading = false;
          return of(null);
        })
      )
      .subscribe(() => {
        this.getProducts();
        this.toastr.success('Product deleted successfully', 'Success');
        this.loading = false;
      });
  }


  resetForm(): void {
    this.newProduct = this.getEmptyProduct();
    this.selectedProduct = this.getEmptyProduct();
  }


  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Unknown';
  }


  private getEmptyProduct(): Product {
    return {
      name: '',
      amount: 0,
      price: 0,
      description: '',
      categoryId: '',
      image: ''
    };
  }
}



