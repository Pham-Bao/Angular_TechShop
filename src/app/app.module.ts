import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './PageHome/navbar/navbar.component';
import { HomeComponent } from './PageHome/home/home.component';
import { ProductNewComponent } from './PageHome/product-new/product-new.component';
import { SupportComponent } from './PageHome/support/support.component';
import { FooterComponent } from './PageHome/footer/footer.component';
import { ProductComponent } from './PageHome/product/product.component';
import { SpecialtyStoresComponent } from './PageHome/specialty-stores/specialty-stores.component';
import { DropdownMenuComponent } from './PageHome/dropdown-menu/dropdown-menu.component';
import { ShopComponent } from './PageHome/Dropdown/shop/shop.component';
import { IphoneComponent } from './PageHome/Dropdown/iphone/iphone.component';
import { IpadComponent } from './PageHome/Dropdown/ipad/ipad.component';
import { MacComponent } from './PageHome/Dropdown/mac/mac.component';
import { WatchComponent } from './PageHome/Dropdown/watch/watch.component';
import { AirPodsComponent } from './PageHome/Dropdown/air-pods/air-pods.component';
import { TVHomeComponent } from './PageHome/Dropdown/tvhome/tvhome.component';
import { FunComponent } from './PageHome/Dropdown/fun/fun.component';
import { AccessoryComponent } from './PageHome/Dropdown/accessory/accessory.component';
import { SearchComponent } from './PageHome/Dropdown/search/search.component';
import { CartComponent } from './PageHome/Dropdown/cart/cart.component';

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
    DropdownMenuComponent,
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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
