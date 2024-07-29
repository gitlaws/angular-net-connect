import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { AccordionComponent } from '../accordion/accordion.component';
import { AccordionItem } from '../accordion/accordion-item.interface';

@Component({
  selector: 'app-component-documentation',
  standalone: true,
  imports: [CommonModule, CardComponent, RouterLink, AccordionComponent],
  templateUrl: './component-documentation.component.html',
  styleUrls: [
    './component-documentation.component.scss',
    '../card/card.component.scss',
  ],
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    { title: 'Item 1', content: 'Content for item 1', isExpanded: false },
    { title: 'Item 2', content: 'Content for item 2', isExpanded: false },
    // Add more items as needed
  ];
}
