import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesForIphoneComponent } from './accessories-for-iphone.component';

describe('AccessoriesForIphoneComponent', () => {
  let component: AccessoriesForIphoneComponent;
  let fixture: ComponentFixture<AccessoriesForIphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoriesForIphoneComponent]
    });
    fixture = TestBed.createComponent(AccessoriesForIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
