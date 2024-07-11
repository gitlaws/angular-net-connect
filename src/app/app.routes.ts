import { Routes } from '@angular/router';

export const routes: Routes = [
  //   {
  //     path: '',
  //     loadComponent: () =>
  //       import('./core/home/home.component').then((m) => m.HomeComponent),
  //   },

  {
    path: 'components', // Updated to match the routerLink path
    loadComponent: () =>
      import(
        './components/component-documentation/component-documentation.component'
      ).then((m) => m.ComponentDocumentationComponent),
  },
];
