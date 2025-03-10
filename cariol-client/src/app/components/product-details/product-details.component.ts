import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[]; // Thêm danh sách ảnh (nếu có)
  colors: string[];
  description?: string; // Thêm mô tả
  size?: string; // Thêm kích thước
}
=======
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product'; // Import model Product
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
<<<<<<< HEAD
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  relatedProducts: Product[] = [];
  selectedImage: string='';
  selectedColor: string='';
=======
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  selectedImage: string = '';
  selectedColor: string = '';
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
  quantity: number = 1;
  showDescription: boolean = false;
  showSize: boolean = false;

<<<<<<< HEAD

  constructor(    
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) {}

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
  
      this.productService.getProductById(id).subscribe(product => {
        if (product) {
          this.product = product;
          this.selectedImage = product.image;
          this.selectedColor = product.colors?.[0] || '';
  
          const category = this.findCategoryByProductId(id);
          if (category) {
            this.loadRelatedProducts(id, category);
          }
  
          this.saveToLocalStorage(id);
        }
      });
    }
  
    private findCategoryByProductId(id: number): string | null {
      const categoryObj = this.productService.getCategoriesWithProducts()
        .find(cat => cat.products.some(p => p.id === id));
  
      return categoryObj ? categoryObj.name : null;
    }
  
    private loadRelatedProducts(id: number, category: string) {
      const allProducts = this.productService.getProducts();
      this.relatedProducts = allProducts
        .filter((p: Product) => this.findCategoryByProductId(p.id) === category && p.id !== id)
        .slice(0, 4);
    }
  
    private saveToLocalStorage(id: number) {
      let viewedProducts: number[] = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
      if (!viewedProducts.includes(id)) {
        viewedProducts.push(id);
        localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
      }
    }

    selectImage(image: string) {
      this.selectedImage = image;
    }
  
    selectColor(color: string) {
      this.selectedColor = color;
    }
  
    increaseQuantity() {
      this.quantity++;
    }
  
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    }
  
    buyNow() {
      if (this.product) {
        this.router.navigate(['/order'], { 
          queryParams: { 
            id: this.product.id, 
            quantity: this.quantity,
            color: this.selectedColor || 'default' 
          } 
        });
      }
    }
  
    addToCart() {
      this.cartService.addToCart({ ...this.product, quantity: this.quantity });
    }
  
    toggleDescription() {
      this.showDescription = !this.showDescription;
    }
  
    toggleSize() {
      this.showSize = !this.showSize;
    }
  }
=======
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Lấy sản phẩm theo ID
    this.productService.getProductById(id).subscribe(product => {
      if (product) {
        this.product = product;
         // Nếu sản phẩm có nhiều hình ảnh, lấy ảnh đầu tiên trong mảng làm ảnh được chọn
         if (product.image && product.image.length > 0) {
          this.selectedImage = product.image[0];
        } else {
          this.selectedImage = ''; // Nếu không có ảnh, gán giá trị mặc định
        }
  
        this.selectedColor = product.color || '';  // Cập nhật lại theo model mới
        this.saveToLocalStorage(id);  // Lưu vào localStorage
      }
    });
  }

  // Lưu sản phẩm đã xem vào localStorage
  private saveToLocalStorage(id: number): void {
    let viewedProducts: number[] = JSON.parse(localStorage.getItem('viewedProducts') || '[]');
    if (!viewedProducts.includes(id)) {
      viewedProducts.push(id);
      localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
    }
  }

  // Chọn ảnh sản phẩm
  selectImage(image: string): void {
    this.selectedImage = image;
  }

  // Chọn màu sắc sản phẩm
  selectColor(color: string): void {
    this.selectedColor = color;
  }

  // Tăng số lượng sản phẩm
  increaseQuantity(): void {
    this.quantity++;
  }

  // Giảm số lượng sản phẩm
  decreaseQuantity(): void {
    if (this.quantity > 1) this.quantity--;
  }

  // Mua ngay
  buyNow(): void {
    if (this.product) {
      this.router.navigate(['/order'], {
        queryParams: {
          id: this.product._id,  // Cập nhật _id thay vì id
          quantity: this.quantity,
          color: this.selectedColor || 'default'
        }
      });
    }
  }

  // Thêm vào giỏ hàng
  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart({ ...this.product, quantity: this.quantity });
    }
  }

  // Chuyển trạng thái hiển thị mô tả
  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  // Chuyển trạng thái hiển thị kích thước
  toggleSize(): void {
    this.showSize = !this.showSize;
  }
}
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
