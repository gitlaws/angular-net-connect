import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [RouterLink, CardComponent],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent {}
