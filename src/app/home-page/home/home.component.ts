import { Component, ViewChild } from '@angular/core';
import { ProductNotificationModalComponent } from 'src/app/modal/components/product-notification-modal/product-notification-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDropdownVisibleShop: boolean = false;

  @ViewChild(ProductNotificationModalComponent) productModal!: ProductNotificationModalComponent;

  modalMessage: string = '';
  currentProduct: string = 'iPhone'; // sản phẩm shop đang kinh doanh

  openModal(product: string) {
    if (product !== this.currentProduct) {
      this.modalMessage = `Currently, the shop only sells ${this.currentProduct}`;
      this.productModal.show();
    } else {
      console.log('Go to iPhone page...');
      // ở đây bạn có thể navigate sang trang iPhone bằng router
    }
  }
}
