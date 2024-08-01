import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrected from 'styleUrl' to 'styleUrls' and made it an array
  imports: [
    RouterOutlet,
    ToolbarComponent,
    ComponentDocumentationComponent,
    SnackbarComponent,
    TopOfPageComponent,
  ],
})
export class AppComponent {
  title = 'angular-net-connect';
}
