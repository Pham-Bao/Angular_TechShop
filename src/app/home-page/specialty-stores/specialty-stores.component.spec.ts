import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyStoresComponent } from './specialty-stores.component';

describe('SpecialtyStoresComponent', () => {
  let component: SpecialtyStoresComponent;
  let fixture: ComponentFixture<SpecialtyStoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialtyStoresComponent]
    });
    fixture = TestBed.createComponent(SpecialtyStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
