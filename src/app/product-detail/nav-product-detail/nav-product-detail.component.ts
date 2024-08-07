import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav-product-detail',
  templateUrl: './nav-product-detail.component.html',
  styleUrls: ['./nav-product-detail.component.css']
})
export class NavProductDetailComponent {
  activeLink: string = 'overview';
  isSticky: boolean = false;

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = scrollPosition > 100; // Điều chỉnh vị trí cuộn khi thanh điều hướng xuất hiện
  }
}
