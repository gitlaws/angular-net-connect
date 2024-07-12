import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'components',
    loadChildren: () =>
      import(
        './components/component-documentation/component-documentation.component'
      ).then((component) => component.ComponentDocumentationComponent),
  },
  // Add route for CardComponent
  {
    path: 'card',
    loadChildren: () =>
      import('./components/card/card.component').then((c) => c.CardComponent),
  },
];
