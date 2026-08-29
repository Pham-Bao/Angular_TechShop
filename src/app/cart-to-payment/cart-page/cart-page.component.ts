import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  items: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.items$.subscribe(items => this.items = items);
  }

  get total(): number {
    return this.cartService.getTotal(this.items);
  }

  get hasSelectedItems(): boolean {
    return this.items.some(item => item.selected);
  }

  updateQuantity(index: number, delta: number) {
    this.cartService.updateQuantity(index, delta);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  toggleSelected(index: number) {
    this.cartService.toggleSelected(index);
  }

  checkout() {
    if (this.hasSelectedItems) {
      this.router.navigate(['/cart-to-payment/order']);
    }
  }
}
