import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoIphoneComponent } from './video-iphone.component';

describe('VideoIphoneComponent', () => {
  let component: VideoIphoneComponent;
  let fixture: ComponentFixture<VideoIphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoIphoneComponent]
    });
    fixture = TestBed.createComponent(VideoIphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
