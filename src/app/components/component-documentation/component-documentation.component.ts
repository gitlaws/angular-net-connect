import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './component-documentation.component.html',
  styleUrls: [
    './component-documentation.component.scss',
    '../card/card.component.scss',
  ],
})
export class ComponentDocumentationComponent {}
