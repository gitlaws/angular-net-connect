import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'], // Corrected property name and made it an array
})
export class CardComponent {
  @Input() public title = '';
  @Input() public subTitle = '';
  @Input() public iconClasses = '';
}
