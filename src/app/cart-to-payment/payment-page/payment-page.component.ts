import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../cart.service';

type PaymentMethod = 'cod' | 'bank' | 'card';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  items: CartItem[] = [];
  paymentMethod: PaymentMethod = 'cod';
  orderPlaced = false;

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.items$.subscribe(items => this.items = items.filter(item => item.selected));
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  selectMethod(method: PaymentMethod) {
    this.paymentMethod = method;
  }

  placeOrder() {
    if (!this.items.length) return;
    this.cartService.clearSelected();
    this.orderPlaced = true;
  }

  backToHome() {
    this.router.navigate(['/home-page']);
  }
}
