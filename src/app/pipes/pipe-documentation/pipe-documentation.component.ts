import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';
import { CustomDateFormatterPipe } from '../custom-date-formatter/custom-date-formatter.pipe';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [CardComponent, CreditCardFormatterPipe, CustomDateFormatterPipe],
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss',
})
export class PipeDocumentationComponent {}
