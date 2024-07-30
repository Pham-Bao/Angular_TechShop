import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent {
  dropdownOpen = false;
  showForm = false;
  address = { name: '', phone: '', address: '' };

  infoList = [
    { name: 'John Doe', phone: '123456789', address: '123 Main St, City, Country' },
    { name: 'Jane Smith', phone: '987654321', address: '456 Another St, City, Country' },
    { name: 'Sam Wilson', phone: '555123456', address: '789 Different St, City, Country' }
  ];

  orderItems = [
    { name: 'Product 1', color: 'red', quantity: 2, price: 20, image: 'assets/img/iphone_test/iphone_black/img1_black.png' },
    { name: 'Product 2', color: 'blue', quantity: 1, price: 10, image: 'assets/img/iphone_test/iphone_black/img1_black.png' },
    { name: 'Product 3', color: 'green', quantity: 3, price: 30, image: 'assets/img/iphone_test/iphone_black/img1_black.png' },
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectInfo(index: number) {
    this.infoList.forEach((info, i) => {
      const checkbox = document.getElementById('info-' + i) as HTMLInputElement | null;
      if (checkbox) {
        if (i === index) {
          checkbox.checked= true;
          if (checkbox.parentElement) {
            checkbox.parentElement.style.backgroundColor = '#000';
            checkbox.parentElement.style.color = '#fff';
          }
        } else {
          checkbox.checked = false;
          if (checkbox.parentElement) {
            checkbox.parentElement.style.backgroundColor = '#fff';
            checkbox.parentElement.style.color = '#000';
          }
        }
      }
    });
  }

  addNewAddress() {
    this.showForm = true;
  }

  saveAddress(form: NgForm) {
    if (form.valid) {
      alert('Địa chỉ đã được lưu!');
      this.showForm = false;
    }
  }
}
