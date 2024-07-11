import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss'], // Corrected property name from 'styleUrl' to 'styleUrls'
  imports: [CommonModule, CardComponent],
})
export class ComponentDocumentationComponent {}
