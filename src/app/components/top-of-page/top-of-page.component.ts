import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-of-page.component.html',
  styleUrl: './top-of-page.component.scss',
})
export class TopOfPageComponent {
  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
