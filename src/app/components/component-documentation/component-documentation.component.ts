import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
  imports: [CardComponent],
})
export class ComponentDocumentationComponent {}
