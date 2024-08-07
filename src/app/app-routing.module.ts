import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Điều chỉnh đường dẫn import nếu cần

const routes: Routes = [
  { path: 'product-page', component: ProductPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'cart-to-payment', loadChildren: () => import('./cart-to-payment/cart-to-payment.module').then(m => m.CartToPaymentModule) },
  { path: 'product-detail', component: ProductDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
