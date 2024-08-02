import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIphoneComponent } from './product-iphone.component';

describe('ProductIphoneComponent', () => {
  let component: ProductIphoneComponent;
  let fixture: ComponentFixture<ProductIphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductIphoneComponent]
    });
    fixture = TestBed.createComponent(ProductIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
