import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';

import { ToolbarComponent } from './core/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ToolbarComponent, ComponentDocumentationComponent],
})
export class AppComponent {
  title = 'angular-net-connect';
}
