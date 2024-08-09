import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProductComponent } from './overview-product.component';

describe('OverviewProductComponent', () => {
  let component: OverviewProductComponent;
  let fixture: ComponentFixture<OverviewProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewProductComponent]
    });
    fixture = TestBed.createComponent(OverviewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
