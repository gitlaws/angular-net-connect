import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'Home',
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

  {
    path: 'services',
    loadComponent: () =>
      import(
        './services/service-documentation/service-documentation.component'
      ).then((component) => component.ServiceDocumentationComponent),
  },

  {
    path: 'apis',
    loadComponent: () =>
      import('./apis/api-documentation/api-documentation.component').then(
        (component) => component.ApiDocumentationComponent
      ),
  },
];
