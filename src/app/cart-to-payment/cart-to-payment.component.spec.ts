import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToPaymentComponent } from './cart-to-payment.component';

describe('CartToPaymentComponent', () => {
  let component: CartToPaymentComponent;
  let fixture: ComponentFixture<CartToPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartToPaymentComponent]
    });
    fixture = TestBed.createComponent(CartToPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
