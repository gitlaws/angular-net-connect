import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  templateUrl: './component-documentation.component.html',
  styleUrls: [
    './component-documentation.component.scss',
    '../card/card.component.scss',
  ],
  imports: [CommonModule, CardComponent],
})
export class ComponentDocumentationComponent {}
