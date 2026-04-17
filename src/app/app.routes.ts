import { Routes } from '@angular/router';

export const routes: Routes = [
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
