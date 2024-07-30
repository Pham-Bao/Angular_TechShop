import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', title: 'Title 1', subtitle: 'Subtitle 1', content: 'Content 1' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', title: 'Title 2', subtitle: 'Subtitle 2', content: 'Content 2' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', title: 'Title 3', subtitle: 'Subtitle 3', content: 'Content 3' },
    { background: 'url(assets/img/iphone_test/iphone_black/chip_black_1.jpg)', title: 'Title 4', subtitle: 'Subtitle 4', content: 'Content 4' },
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
