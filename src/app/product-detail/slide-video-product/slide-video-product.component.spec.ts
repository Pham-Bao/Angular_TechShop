import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideVideoProductComponent } from './slide-video-product.component';

describe('SlideVideoProductComponent', () => {
  let component: SlideVideoProductComponent;
  let fixture: ComponentFixture<SlideVideoProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideVideoProductComponent]
    });
    fixture = TestBed.createComponent(SlideVideoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
