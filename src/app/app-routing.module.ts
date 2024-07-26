import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'product-page', component: ProductPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'cart-to-payment', loadChildren: () => import('./cart-to-payment/cart-to-payment.module').then(m => m.CartToPaymentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
