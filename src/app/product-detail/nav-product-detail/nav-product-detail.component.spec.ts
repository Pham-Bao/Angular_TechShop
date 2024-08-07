import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProductDetailComponent } from './nav-product-detail.component';

describe('NavProductDetailComponent', () => {
  let component: NavProductDetailComponent;
  let fixture: ComponentFixture<NavProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavProductDetailComponent]
    });
    fixture = TestBed.createComponent(NavProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
