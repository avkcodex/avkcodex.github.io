import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile')
        .then(m => m.ProfileComponent)
  },
   {
    path: 'bookmarks',
    loadComponent: () =>
      import('./features/bookmarks/components/bookmark-pages/bookmark-pages')
        .then(m => m.BookmarkPagesComponent)
  },
  {
    path: '',
    redirectTo: 'bookmarks',
    pathMatch: 'full'
  }
];
