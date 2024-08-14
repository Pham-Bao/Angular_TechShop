import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent  implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const images = this.el.nativeElement.querySelectorAll('.image-wrapper');
    const windowHeight = window.innerHeight;

    images.forEach((image: HTMLElement) => {
      const rect = image.getBoundingClientRect();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        image.classList.add('in-view');
      } else {
        image.classList.remove('in-view');
      }
    });
  }
}
