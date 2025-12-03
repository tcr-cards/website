import { Route } from '@angular/router';
import { Sets } from './sets.page';

export const SETS_ROUTES: Route[] = [
  {
    path: '',
    component: Sets,
    children: [],
  },
];
