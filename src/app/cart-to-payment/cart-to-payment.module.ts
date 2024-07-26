import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartToPaymentComponent } from './cart-to-payment.component';
import { CartToPaymentRoutingModule } from './cart-to-payment-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartToPaymentComponent,
    CartPageComponent,
    OrderPageComponent,
    PaymentPageComponent,
    LeftBarComponent,

  ],
  imports: [
    CommonModule,
    CartToPaymentRoutingModule,
    FormsModule
  ]
})
export class CartToPaymentModule { }
