import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;
  readonly interval = 8000; // 4 seconds
  items = [
    {
      src: 'https://th.bing.com/th/id/OIG4.Xi5a.97_4DiriMNgneVr?pid=ImgGn',
      alt: 'Technology bridge',
    },
    {
      src: 'https://th.bing.com/th/id/OIG1.iJdYUNuvyFcoV1v7nyzD?pid=ImgGn',
      alt: 'Scalable application',
    },
    {
      src: 'https://th.bing.com/th/id/OIG4.z2QSfBUS1FBYeA_PAN55?w=1024&h=1024&rs=1&pid=ImgDetMain',
      alt: 'Innovative technology',
    },
    {
      src: 'https://th.bing.com/th/id/OIG1.IJeBxVtf0Tmcv85b6_Wn?w=1024&h=1024&rs=1&pid=ImgDetMain',
      alt: 'Future technology',
    },
  ];

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  showSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }
}
