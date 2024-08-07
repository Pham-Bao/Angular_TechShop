import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoProductComponent } from './video-product.component';

describe('VideoProductComponent', () => {
  let component: VideoProductComponent;
  let fixture: ComponentFixture<VideoProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoProductComponent]
    });
    fixture = TestBed.createComponent(VideoProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
