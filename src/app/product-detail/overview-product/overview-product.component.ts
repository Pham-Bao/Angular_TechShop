import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-overview-product',
  templateUrl: './overview-product.component.html',
  styleUrls: ['./overview-product.component.css']
})
export class OverviewProductComponent implements AfterViewInit {
  colors: string[] = ['1c1c1e', 'e7e5e2', '535254', '8e8e93', '242527']; 
  productNames: string[] = ['iPhone 15 Pro 6,1”1 với bốn màu', 'iPhone 15 Pro Max 6,7”1 và iPhone 15 Pro 6,1”1 Titan Tự Nhiên', 'iPhone 15 Pro Max 6,7”1 và iPhone 15 Pro 6,1”1  Titan Xanh', 'iPhone 15 Pro Max 6,7”1 và iPhone 15 Pro 6,1”1  Titan Trắng', 'iPhone 15 Pro Max 6,7”1 và iPhone 15 Pro 6,1”1  TiTan Đen']; // Tên sản phẩm tương ứng
  currentColor: string = this.colors[0];
  currentImage: string = this.getImagePath(this.currentColor);
  currentProductName: string = this.productNames[0]; 

  @ViewChild('productImage') productImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit() {
    this.updateImageVisibility();
  }

  selectColor(color: string) {
    this.currentColor = color;
    this.currentImage = this.getImagePath(color);
    this.currentProductName = this.getProductName(color); 
    this.updateImageVisibility();
    console.log(color);
  }

  private getImagePath(color: string): string {
    return `assets/imgOverView/${color}.jpg`; 
  }

  private getProductName(color: string): string {
    const index = this.colors.indexOf(color);
    return this.productNames[index] || 'Tên sản phẩm không xác định'; 
  }

  private updateImageVisibility() {
    const img = this.productImage.nativeElement;
    img.classList.remove('show');
    setTimeout(() => img.classList.add('show'), 0); 
  }

  isExpanded = false;
  isRippleActive = false;

  toggleExpand() {
    this.isRippleActive = true;

    // Kích hoạt hiệu ứng ripple
    setTimeout(() => {
      this.isRippleActive = false;
      this.isExpanded = !this.isExpanded;
    }, 400); // Thời gian ripple là 400ms
  }



  isShining = false;

  triggerShine() {
    this.isShining = true;
    setTimeout(() => {
      this.isShining = false;
    }, 1000); // Hiệu ứng kéo dài 1 giây
  }
}
