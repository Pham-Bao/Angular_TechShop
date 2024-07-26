import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartToPaymentComponent } from './cart-to-payment.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {
    path: '', component: CartToPaymentComponent, children: [
      { path: '', redirectTo: 'cart', pathMatch: 'full' },
      { path: 'cart', component: CartPageComponent },
      { path: 'order', component: OrderPageComponent },
      { path: 'payment', component: PaymentPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartToPaymentRoutingModule { }
