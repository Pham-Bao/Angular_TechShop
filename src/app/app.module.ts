import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-page/home/home.component';
import { ProductNewComponent } from './home-page/product-new/product-new.component';
import { SupportComponent } from './home-page/support/support.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { ProductComponent } from './home-page/product/product.component';
import { SpecialtyStoresComponent } from './home-page/specialty-stores/specialty-stores.component';
import { ShopComponent } from './home-page/Dropdown/shop/shop.component';
import { IphoneComponent } from './home-page/Dropdown/iphone/iphone.component';
import { IpadComponent } from './home-page/Dropdown/ipad/ipad.component';
import { MacComponent } from './home-page/Dropdown/mac/mac.component';
import { WatchComponent } from './home-page/Dropdown/watch/watch.component';
import { AirPodsComponent } from './home-page/Dropdown/air-pods/air-pods.component';
import { TVHomeComponent } from './home-page/Dropdown/tvhome/tvhome.component';
import { FunComponent } from './home-page/Dropdown/fun/fun.component';
import { AccessoryComponent } from './home-page/Dropdown/accessory/accessory.component';
import { SearchComponent } from './home-page/Dropdown/search/search.component';
import { CartComponent } from './home-page/Dropdown/cart/cart.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductImageComponent } from './product-page/product-image/product-image.component';
import { CarouselComponent } from './product-page/carousel/carousel.component';
import { CartToPaymentModule } from './cart-to-payment/cart-to-payment.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductNewComponent,
    SupportComponent,
    FooterComponent,
    ProductComponent,
    SpecialtyStoresComponent,
    ShopComponent,
    IphoneComponent,
    IpadComponent,
    MacComponent,
    WatchComponent,
    AirPodsComponent,
    TVHomeComponent,
    FunComponent,
    AccessoryComponent,
    SearchComponent,
    CartComponent,
    ProductPageComponent,
    HomePageComponent,
    ProductImageComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartToPaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
