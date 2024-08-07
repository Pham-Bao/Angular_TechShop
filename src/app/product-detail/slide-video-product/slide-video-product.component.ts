import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-slide-video-product',
  templateUrl: './slide-video-product.component.html',
  styleUrls: ['./slide-video-product.component.css']
})
export class SlideVideoProductComponent implements OnInit {
  videos = [
    { url: 'assets/video1.mp4' },
    { url: 'assets/video2.mp4' },
    { url: 'assets/video3.mp4' },
  ];

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }
}
