import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-icons',
  templateUrl: './product-icons.component.html',
  styleUrls: ['./product-icons.component.css']
})
export class ProductIconsComponent {
  constructor(private router: Router) {}

  navigateToProductDetail() {
    this.router.navigate(['/product-detail']);
  }
}
