import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss',
})
export class PipeDocumentationComponent {}
