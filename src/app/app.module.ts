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
    DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
