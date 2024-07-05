import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cyber-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cyber-menu.component.html',
  styleUrl: './cyber-menu.component.scss',
})
export class CyberMenuComponent {
  isMenuOpen = false;
  menuItems = [
    { name: 'Projects', url: '/home' },
    { name: 'Profile', url: '/about' },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    // Remove the click event listener from the document
    document.removeEventListener('click', this.documentClickHandler.bind(this));
  }

  documentClickHandler(event: MouseEvent) {
    // Check if the click event is coming from within the dropdown content
    if (!this.elementRef.nativeElement.contains(event.target)) {
      // If not, close the dropdown
      this.isMenuOpen = false;
    }
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
