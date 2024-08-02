import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-learn-iphone',
  templateUrl: './learn-iphone.component.html',
  styleUrls: ['./learn-iphone.component.css']
})
export class LearnIphoneComponent {
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
