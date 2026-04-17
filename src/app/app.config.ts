import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, provideState} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { bookmarkReducer } from './features/bookmarks/store/bookmark.reducer';
import { BookmarkEffects } from './features/bookmarks/store/bookmark.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
     provideHttpClient(),
    provideStore(),
    provideState('bookmarks', bookmarkReducer),
    provideEffects([BookmarkEffects])
  ]
};
