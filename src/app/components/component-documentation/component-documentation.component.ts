import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionItem } from '../accordion/accordion-item.interface';
import { CreditCardInputComponent } from '../credit-card-input/credit-card-input.component';
import { SimpleTableComponent } from '../simple-table/simple-table.component';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderType } from '../loader/models/loader-type.enum';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    RouterLink,
    AccordionComponent,
    CreditCardInputComponent,
    SimpleTableComponent,
    LoaderComponent,
    BottomSheetComponent,
  ],
  templateUrl: './component-documentation.component.html',
  styleUrls: [
    './component-documentation.component.scss',
    '../card/card.component.scss',
  ],
})
export class ComponentDocumentationComponent {
  hide() {
    throw new Error('Method not implemented.');
  }
  public loaderType = LoaderType.Loading;
  public accordionItems: AccordionItem[] = [
    {
      title: 'Item 1',
      content:
        'Content for item 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus et quidem consectetur incidunt, doloremque facere illo rem aliquam quam perspiciatis voluptatum dolorum nemo molestiae accusantium deserunt odit nesciunt recusandae.',
      isExpanded: false,
    },
    {
      title: 'Item 2',
      content:
        'Content for item 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus et quidem consectetur incidunt, doloremque facere illo rem aliquam quam perspiciatis voluptatum dolorum nemo molestiae accusantium deserunt odit nesciunt recusandae.',
      isExpanded: false,
    },
    // Add more items as needed
  ];
  isShown: any;
}
