import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotificationModalComponent } from './product-notification-modal.component';

describe('ProductNotificationModalComponent', () => {
  let component: ProductNotificationModalComponent;
  let fixture: ComponentFixture<ProductNotificationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNotificationModalComponent]
    });
    fixture = TestBed.createComponent(ProductNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
