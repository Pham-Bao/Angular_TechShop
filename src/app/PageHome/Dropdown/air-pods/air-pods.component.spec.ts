import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPodsComponent } from './air-pods.component';

describe('AirPodsComponent', () => {
  let component: AirPodsComponent;
  let fixture: ComponentFixture<AirPodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirPodsComponent]
    });
    fixture = TestBed.createComponent(AirPodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
