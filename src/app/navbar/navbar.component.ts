import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarVisible = false;
  active = false;
  isSearchActive = false;
  activeCategory: string | null = null;
  activeNavItem: string | null = null;

  navItems = ['Home', 'Product', 'Cart'];

  // Array of categories
  categories = [
    { title: 'iPad', image: 'assets/icons/shop_cart.png' },
    { title: 'iPhone', image: 'assets/icons/shop_cart.png' },
    { title: 'Head Phone', image: 'assets/icons/shop_cart.png' },
    { title: 'Order', image: 'assets/icons/shop_cart.png' }
  ];

  activeBgLeft = '0px';
  activeBgWidth = '0px';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateActiveBg();
  }

  // Get category titles
  get categoryTitles(): string[] {
    return this.categories.map(category => category.title);
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }

  toggleSearch() {
    this.isSearchActive = !this.isSearchActive;
  }

  selectCategory(category: string) {
    this.activeCategory = category;
    this.isNavbarVisible = false;
  }

  navigateToPage(page: string) {
    this.activeNavItem = page;
    switch (page) {
      case 'home':
        this.router.navigate(['/home-page']);
        break;
      case 'product':
        this.router.navigate(['/product-page']);
        break;
      case 'cart':
        this.router.navigate(['/cart-to-payment/cart']);
        break;
    }
    this.updateActiveBg();
    this.isNavbarVisible = false;
  }

  updateActiveBg() {
    setTimeout(() => {
      const activeElement = document.querySelector('.navbar-menu li.active') as HTMLElement;
      if (activeElement) {
        this.activeBgLeft = `${activeElement.offsetLeft}px`;
        this.activeBgWidth = `${activeElement.clientWidth}px`;
      }
    }, 0);
  }
}
