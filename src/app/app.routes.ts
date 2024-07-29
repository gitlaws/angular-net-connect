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
    path: 'pipes',
    loadComponent: () =>
      import('./pipes/pipe-documentation/pipe-documentation.component').then(
        (component) => component.PipeDocumentationComponent
      ),
  },

  {
    path: 'directives',
    loadComponent: () =>
      import(
        './directives/directive-documentation/directive-documentation.component'
      ).then((component) => component.DirectiveDocumentationComponent),
  },

  {
    path: 'apis',
    loadComponent: () =>
      import('./apis/api-documentation/api-documentation.component').then(
        (component) => component.ApiDocumentationComponent
      ),
  },
];
