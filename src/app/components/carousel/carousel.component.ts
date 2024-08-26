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
  readonly interval = 8000; // 8 seconds
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
    this.startInterval();
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startInterval() {
    this.clearInterval();
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  resetAnimation() {
    const carouselInner = document.querySelector(
      '.carousel__inner'
    ) as HTMLElement;
    if (carouselInner) {
      carouselInner.style.animation = 'none';
      carouselInner.offsetHeight; // Trigger reflow
      carouselInner.style.animation = '';
    }
  }

  showSlide(index: number) {
    this.currentIndex = index;
    this.resetAnimation();
    this.startInterval();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.resetAnimation();
    this.startInterval();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.resetAnimation();
    this.startInterval();
  }

  debounce(func: Function, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
}
