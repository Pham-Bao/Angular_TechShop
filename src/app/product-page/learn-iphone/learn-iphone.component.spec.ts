import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIphoneComponent } from './learn-iphone.component';

describe('LearnIphoneComponent', () => {
  let component: LearnIphoneComponent;
  let fixture: ComponentFixture<LearnIphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnIphoneComponent]
    });
    fixture = TestBed.createComponent(LearnIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
