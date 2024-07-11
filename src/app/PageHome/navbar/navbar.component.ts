import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = false;
  isDropdownVisibleShop: { [key: string]: boolean } = {};

  showDropdown(menu: string) {
    this.isDropdownVisibleShop[menu] = true;
  }

  hideDropdown(menu: string) {
    this.isDropdownVisibleShop[menu] = false;
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
}
