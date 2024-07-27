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

  // Assuming components exist for these paths, add them similarly
  // {
  // path: 'services',
  // loadChildren: () =>
  //   import('./services/services.component').then((s) => s.ServicesComponent),
  // },
  // {
  // path: 'pipes',
  // loadChildren: () =>
  //   import('./pipes/pipes.component').then((p) => p.PipesComponent),
  // },
  // {
  // path: 'directives',
  // loadChildren: () =>
  //   import('./directives/directives.component').then((d) => d.DirectivesComponent),
  // },
  // {
  // path: 'apis',
  // loadChildren: () =>
  //   import('./apis/apis.component').then((a) => a.ApisComponent),
  // },
  // {
  // path: 'other',
  // loadChildren: () =>
  //   import('./other/other.component').then((o) => o.OtherComponent),
  // },
];
