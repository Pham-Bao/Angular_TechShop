import { Component, AfterViewInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-video-iphone',
  templateUrl: './video-iphone.component.html',
  styleUrls: ['./video-iphone.component.css']
})
export class VideoIphoneComponent implements AfterViewInit {
  ngAfterViewInit() {
    const video: HTMLVideoElement | null = document.getElementById('myVideo') as HTMLVideoElement;

    if (video) {
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const video: HTMLVideoElement | null = document.getElementById('myVideo') as HTMLVideoElement;
    if (video) {
      video.classList.remove('shrink1', 'shrink2', 'shrink3');
      if (window.pageYOffset > 700) {
        video.classList.add('shrink3');
      } else if (window.pageYOffset > 350) {
        video.classList.add('shrink2');
      } else if (window.pageYOffset > 100) {
        video.classList.add('shrink1');
      }
    }
  }
}
