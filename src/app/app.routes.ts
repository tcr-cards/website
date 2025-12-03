import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sets',
    pathMatch: 'full',
  },
  {
    path: 'sets',
    loadChildren: () =>
      import('./presentation/pages/sets/sets.routes').then((m) => m.SETS_ROUTES),
  },
];
