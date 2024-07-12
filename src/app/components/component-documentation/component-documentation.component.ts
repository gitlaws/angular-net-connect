import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.scss',
  imports: [CommonModule, CardComponent],
})
export class ComponentDocumentationComponent {}
