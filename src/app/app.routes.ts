import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  //   {
  //     path: '',
  //     loadComponent: () =>
  //       import('./core/home/home.component').then((m) => m.HomeComponent),
  //   },

  {
    path: 'Component-Documentation',
    loadComponent: () =>
      import(
        './components/component-documentation/component-documentation.component'
      ).then((m) => m.ComponentDocumentationComponent),
  },
];
