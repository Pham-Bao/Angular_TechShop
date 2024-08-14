import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; // Điều chỉnh đường dẫn import nếu cần
import { BuyProductComponent } from './buy-product/buy-product.component';
const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full' }, // Đây là route mặc định
  { path: 'product-page', component: ProductPageComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'cart-to-payment', loadChildren: () => import('./cart-to-payment/cart-to-payment.module').then(m => m.CartToPaymentModule) },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'buy-product', component: BuyProductComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
