import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [CardComponent, CreditCardFormatterPipe],
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent {}
