import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadComponent } from './ipad.component';

describe('IpadComponent', () => {
  let component: IpadComponent;
  let fixture: ComponentFixture<IpadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpadComponent]
    });
    fixture = TestBed.createComponent(IpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
