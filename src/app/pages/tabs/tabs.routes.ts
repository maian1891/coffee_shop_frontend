import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'drink-menu',
        loadComponent: () =>
          import('../drink-menu/drink-menu.page').then((m) => m.DrinkMenuPage),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('../user/user.page').then((m) => m.UserPage),
      },
      {
        path: '',
        redirectTo: '/tabs/drink-menu',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/drink-menu',
    pathMatch: 'full',
  },
];
