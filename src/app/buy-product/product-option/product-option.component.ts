import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart-to-payment/cart.service';

@Component({
  selector: 'app-product-option',
  templateUrl: './product-option.component.html',
  styleUrls: ['./product-option.component.css']
})
export class ProductOptionComponent {

  colors = [
    {
      colorName: 'Đen',
      colorCode: '#151515',
      images: ['assets/img-buy-product/iphone15/iphone-15-den-1.png']
    },
    {
      colorName: 'Hồng',
      colorCode: '#FFC0CB',
      images: ['assets/img-buy-product/iphone15/iphone-15-hong-1.png']
    },
    {
      colorName: 'Vàng',
      colorCode: '#F5E1A4',
      images: ['assets/img-buy-product/iphone15/iphone-15-vang-1.png']
    },
    {
      colorName: 'Xanh Dương',
      colorCode: '#5F8575',
      images: ['assets/img-buy-product/iphone15/iphone-15-xanh-duong-1.png']
    },
    {
      colorName: 'Xanh Lá',
      colorCode: '#A8C5A2',
      images: ['assets/img-buy-product/iphone15/iphone-15-xanh-la-1.png']
    }
  ];

  storageOptions = [
    { capacity: '128GB', price: 22999000, installment: 936000 },
    { capacity: '256GB', price: 25999000, installment: 1059000 },
    { capacity: '512GB', price: 31999000, installment: 1303000 }
  ];

  selectedColorIndex = 0;
  selectedImageIndex = 0;
  selectedOption: string = this.storageOptions[0].capacity;

  constructor(private cartService: CartService, private router: Router) {}

  get selectedImages() {
    return this.colors[this.selectedColorIndex].images;
  }

  get selectedStorage() {
    return this.storageOptions.find(option => option.capacity === this.selectedOption)!;
  }

  changeColor(index: number) {
    this.selectedColorIndex = index;
    this.selectedImageIndex = 0; // Reset to first image when color changes
  }

  changeImage(index: number) {
    this.selectedImageIndex = index;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  addToCart() {
    const color = this.colors[this.selectedColorIndex];
    this.cartService.addToCart({
      name: `iPhone 15 - ${color.colorName} - ${this.selectedOption}`,
      image: this.selectedImages[0],
      color: color.colorName,
      colorCode: color.colorCode,
      storage: this.selectedOption,
      price: this.selectedStorage.price,
      quantity: 1,
      selected: true
    });
    this.router.navigate(['/cart-to-payment/cart']);
  }
}
