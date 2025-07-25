import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'solutions',
    loadComponent: () => import('./components/solutions/solutions.component').then(m => m.SolutionsComponent)
  },
  {
    path: 'team',
    loadComponent: () => import('./components/team/team.component').then(m => m.TeamComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
