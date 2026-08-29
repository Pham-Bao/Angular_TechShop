import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem, CartService } from '../cart.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  dropdownOpen = false;
  showForm = false;
  selectedInfoIndex = 0;

  infoList = [
    { name: 'John Doe', phone: '123456789', address: '123 Main St, City, Country' },
    { name: 'Jane Smith', phone: '987654321', address: '456 Another St, City, Country' },
    { name: 'Sam Wilson', phone: '555123456', address: '789 Different St, City, Country' }
  ];

  orderItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartService.items$.subscribe(items => {
      this.orderItems = items.filter(item => item.selected);
    });
  }

  get total(): number {
    return this.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectInfo(index: number) {
    this.selectedInfoIndex = index;
    this.dropdownOpen = false;
  }

  addNewAddress() {
    this.showForm = true;
  }

  saveAddress(form: NgForm) {
    if (form.valid) {
      this.infoList.push({ ...form.value });
      this.selectedInfoIndex = this.infoList.length - 1;
      form.resetForm();
      this.showForm = false;
    }
  }

  goToPayment() {
    if (this.orderItems.length) {
      this.router.navigate(['/cart-to-payment/payment']);
    }
  }
}
