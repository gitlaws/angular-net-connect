import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from '../flatten/flatten.pipe';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [CardComponent, CreditCardFormatterPipe, FlattenPipe],
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss',
})
export class PipeDocumentationComponent {
  flattenData: any;
  modifyFlatten() {
    throw new Error('Method not implemented.');
  }
  reassignFlatten() {
    throw new Error('Method not implemented.');
  }
}
