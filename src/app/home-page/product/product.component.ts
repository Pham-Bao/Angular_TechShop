import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @ViewChild('productContainer') productContainer: ElementRef | undefined;
  showScrollButtons = false;

  constructor() { }

  ngAfterViewInit() {
    this.checkScrollButtons();
  }

  scrollLeft() {
    if (this.productContainer) {
      this.productContainer.nativeElement.scrollLeft -= 400; // Điều chỉnh khoảng cách cuộn trái phải
    }
    this.checkScrollButtons();
  }

  scrollRight() {
    if (this.productContainer) {
      this.productContainer.nativeElement.scrollLeft += 400; // Điều chỉnh khoảng cách cuộn trái phải
    }
    this.checkScrollButtons();
  }

  checkScrollButtons() {
    if (this.productContainer) {
      const container = this.productContainer.nativeElement;
      this.showScrollButtons = container.scrollWidth > container.clientWidth;
    }
  }
}
