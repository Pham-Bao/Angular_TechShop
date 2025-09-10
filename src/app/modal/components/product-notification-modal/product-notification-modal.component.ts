import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-product-notification-modal',
  templateUrl: './product-notification-modal.component.html',
  styleUrls: ['./product-notification-modal.component.css']
})
export class ProductNotificationModalComponent {
  @Input() message: string = '';
  isVisible: boolean = false;
  activeTab: string = 'iphone';

  show(message: string = 'Thông báo mặc định') {
    this.message = message;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
  products = {
    iphone: [
      { name: 'iPhone SE', price: '2.000.000₫' },
      { name: 'iPhone 12Mini', price: '3.500.000₫' },
      { name: 'iPhone 13Mini', price: '5.500.000₫' }

    ],
    ipad: [
      { name: 'iPad Pro', price: '25.000.000₫' },
      { name: 'iPad Air', price: '18.000.000₫' }
    ],
    mac: [
      { name: 'MacBook Pro', price: '45.000.000₫' },
      { name: 'MacBook Air', price: '30.000.000₫' }
    ],
    watch: [
      { name: 'Apple Watch Ultra', price: '20.000.000₫' },
      { name: 'Apple Watch SE', price: '8.000.000₫' }
    ],
    other: [
      { name: 'AirPods Pro', price: '5.000.000₫' },
      { name: 'HomePod', price: '7.000.000₫' }
    ]
  };

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
