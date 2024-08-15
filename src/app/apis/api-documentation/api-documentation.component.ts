import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { RouterLink } from '@angular/router';
import { CrudNestComponent } from './crud-nest/crud-nest.component';

@Component({
  selector: 'app-api-documentation',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, CrudNestComponent],
  templateUrl: './api-documentation.component.html',
  styleUrl: './api-documentation.component.scss',
})
export class ApiDocumentationComponent {}
