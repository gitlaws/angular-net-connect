import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  standalone: true,
  imports: [],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent {
  @ViewChild('iconContainer', { static: false }) iconContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.startScrolling();
  }

  startScrolling(): void {
    const container = this.iconContainer.nativeElement;
    const firstChild = container.firstElementChild;

    const scroll = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= firstChild.clientWidth) {
        container.appendChild(firstChild);
        container.scrollLeft = 0;
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }
}
