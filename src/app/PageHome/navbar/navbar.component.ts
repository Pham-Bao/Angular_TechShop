import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible = false;
  isDropdownVisibleShop: { [key: string]: boolean } = {};
  active = false;

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
}
