import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'components',
    loadComponent: () =>
      import(
        './components/component-documentation/component-documentation.component'
      ).then((component) => component.ComponentDocumentationComponent),
  },
];
