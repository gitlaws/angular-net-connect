import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CreditCardFormatterPipe } from '../credit-card-formatter/credit-card-formatter.pipe';
import { FlattenPipe } from '../flatten/flatten.pipe';
import { FlattenArrayComponent } from '../flatten-array/flatten-array.component';

@Component({
  selector: 'app-pipe-documentation',
  standalone: true,
  imports: [
    CardComponent,
    CreditCardFormatterPipe,
    FlattenPipe,
    FlattenArrayComponent,
  ],
  templateUrl: './pipe-documentation.component.html',
  styleUrls: ['./pipe-documentation.component.scss'],
})
export class PipeDocumentationComponent {}
