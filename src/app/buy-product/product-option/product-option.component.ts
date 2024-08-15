import { Component } from '@angular/core';

@Component({
  selector: 'app-product-option',
  templateUrl: './product-option.component.html',
  styleUrls: ['./product-option.component.css']
})
export class ProductOptionComponent {

  colors = [
    {
      colorName: 'Silver',
      colorCode: '#C0C0C0',
      images: [
        'assets/img-buy-product/iphone15/iphone-15-den-1.png',
        'assets/img-buy-product/iphone15/iphone-15-hong-1.png',
        'assets/img-buy-product/iphone15/iphone-15-xanh-duong-1.png',
      ]
    },
    {
      colorName: 'Pink',
      colorCode: '#FFC0CB',
      images: [
        'assets/imgProduct/pink1.jpg',
        'assets/imgProduct/pink2.jpg',
        'assets/imgProduct/pink3.jpg'
      ]
    },
    {
      colorName: 'Yellow',
      colorCode: '#FFFF00',
      images: [
        'assets/imgProduct/yellow1.jpg',
        'assets/imgProduct/yellow2.jpg',
        'assets/imgProduct/yellow3.jpg'
      ]
    },
    {
      colorName: 'Green',
      colorCode: '#008000',
      images: [
        'assets/imgProduct/green1.jpg',
        'assets/imgProduct/green2.jpg',
        'assets/imgProduct/green3.jpg'
      ]
    },
    {
      colorName: 'Black',
      colorCode: '#000000',
      images: [
        'assets/imgProduct/black1.jpg',
        'assets/imgProduct/black2.jpg',
        'assets/imgProduct/black3.jpg'
      ]
    }
  ];

  selectedColorIndex = 0;
  selectedImageIndex = 0;

  get selectedImages() {
    return this.colors[this.selectedColorIndex].images;
  }

  changeColor(index: number) {
    this.selectedColorIndex = index;
    this.selectedImageIndex = 0; // Reset to first image when color changes
  }

  changeImage(index: number) {
    this.selectedImageIndex = index;
  }


  selectedOption: string = '128GB';

  selectOption(option: string) {
    this.selectedOption = option;
  }

}
