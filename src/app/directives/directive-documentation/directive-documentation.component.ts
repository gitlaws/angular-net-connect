import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { CopyDirective } from '../copy/copy.directive'; // Import the CopyDirective

@Component({
  selector: 'app-directive-documentation',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, CopyDirective], // Add CopyDirective to imports
  templateUrl: './directive-documentation.component.html',
  styleUrls: ['./directive-documentation.component.scss'],
})
export class DirectiveDocumentationComponent {
  textToCopy: any;
}
