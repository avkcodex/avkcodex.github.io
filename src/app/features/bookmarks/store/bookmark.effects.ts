import { inject, Injectable } from '@angular/core';
import { BookmarkService } from '../services/bookmark.services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';
import * as BookmarkActions from './bookmark.action';

@Injectable()
export class BookmarkEffects {

   private readonly actions$ = inject(Actions);
  constructor(
    private bookmarkService: BookmarkService
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.loadBookmarks),
      switchMap(() =>
        this.bookmarkService.getAll().pipe(
          map(bookmarks =>
            BookmarkActions.loadBookmarksSuccess({ bookmarks })
          ),
          catchError(error =>
            of(BookmarkActions.loadBookmarksFailure({ error }))
          )
        )
      )
    )
  );

  add$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.addBookmark),
      switchMap(({ bookmark }) =>
        this.bookmarkService.add(bookmark).pipe(
          map(res =>
            BookmarkActions.addBookmarkSuccess({ bookmark: res })
          ),
          catchError(error =>
            of(BookmarkActions.addBookmarkFailure({ error }))
          )
        )
      )
    )
  );

  update$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BookmarkActions.updateBookmark),
    switchMap(({ bookmark }) =>
      this.bookmarkService.update(bookmark).pipe(
        map(updated =>
          BookmarkActions.updateBookmarkSuccess({ bookmark: updated })
        ),
        catchError(error =>
          of(BookmarkActions.updateBookmarkFailure({ error }))
        )
      )
    )
  )
);

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.deleteBookmark),
      switchMap(({ id }) =>
        this.bookmarkService.delete(id).pipe(
          map(() =>
            BookmarkActions.deleteBookmarkSuccess({ id })
          ),
          catchError(error =>
            of(BookmarkActions.deleteBookmarkFailure({ error }))
          )
        )
      )
    )
  );
}