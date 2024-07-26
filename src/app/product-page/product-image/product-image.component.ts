import { Component } from '@angular/core';
type Color = 'red' | 'blue' | 'green' | 'yellow';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  productName = 'Item Name';
  productDescription = 'This is a product description.';
  colors: Color[] = ['red', 'blue', 'green', 'yellow'];
  
  images: { [key in Color]: string[] } = {
    red: ['assets/img/iphone_test/iphone_black/img1_black.png', 'assets/img/iphone_test/iphone_black/img2_black.png', 'assets/img/iphone_test/iphone_black/img3_black.png',],
    blue: ['assets/img/iphone_test/iphone_black/img1_black.png', 'assets/img/iphone_test/iphone_black/img2_black.png', 'assets/img/iphone_test/iphone_black/img3_black.png',],
    green:['assets/img/iphone_test/iphone_black/img1_black.png', 'assets/img/iphone_test/iphone_black/img2_black.png', 'assets/img/iphone_test/iphone_black/img3_black.png',],
    yellow: ['assets/img/iphone_test/iphone_black/img1_black.png', 'assets/img/iphone_test/iphone_black/img2_black.png', 'assets/img/iphone_test/iphone_black/img3_black.png',],
  };

  currentColor: Color = 'red';
  currentImageIndex = 0;

  get currentImage(): string {
    return this.images[this.currentColor][this.currentImageIndex];
  }

  selectColor(color: Color): void {
    this.currentColor = color;
    this.currentImageIndex = 0;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images[this.currentColor].length;
  }

  previousImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images[this.currentColor].length) % this.images[this.currentColor].length;
  }

  isSelected(color: Color): boolean {
    return this.currentColor === color;
  }

  isCurrentImageIndex(index: number): boolean {
    return this.currentImageIndex === index;
  }

  getColorClass(color: Color): string {
    return `${color} ${this.isSelected(color) ? 'selected' : ''}`;
  }
}
