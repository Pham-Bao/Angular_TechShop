import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', content: 'Nội dung ảnh 1' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', content: 'Nội dung ảnh 2' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', content: 'Nội dung ảnh 3' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', content: 'Nội dung ảnh 4' },
  ];
  
  currentIndex = 0;
  touchStartX = 0;
  touchEndX = 0;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipeGesture();
  }

  handleSwipeGesture(): void {
    if (this.touchEndX < this.touchStartX) {
      this.nextImage();
    } else if (this.touchEndX > this.touchStartX) {
      this.prevImage();
    }
  }
}
