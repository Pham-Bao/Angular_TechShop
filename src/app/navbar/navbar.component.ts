import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = false;
  isDropdownVisibleShop: { [key: string]: boolean } = {};
  active = false;
  isSearchActive = false;

  // Thêm mảng các category với title và image
  categories = [
    { title: 'iPad', image: 'assets/icons/shop_cart.png' },
    { title: 'MacBook', image: 'assets/icons/shop_cart.png' },
    { title: 'iPhone', image: 'assets/icons/shop_cart.png' }
  ];

  constructor(private router: Router) {}
  // Lấy danh sách các tiêu đề từ các category
  get categoryTitles(): string[] {
    return this.categories.map(category => category.title);
  }

  showDropdown(menu: string) {
    this.isDropdownVisibleShop[menu] = true;
    this.active = true;
  }

  hideDropdown(menu: string, event: MouseEvent) {
    const relatedTarget = event.relatedTarget as HTMLElement;
    const currentDropdown = document.querySelector('.dropdown-content');

    if (currentDropdown && !currentDropdown.contains(relatedTarget)) {
      this.isDropdownVisibleShop[menu] = false;
      this.active = false;
    }
  }

  preventHideDropdown() {
    // No-op: Chỉ để ngăn chặn sự kiện mouseleave khi chuột di chuyển vào phần tử con
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }
  navigateToProductPage() {
    this.router.navigate(['/product-page']);
  }

}
