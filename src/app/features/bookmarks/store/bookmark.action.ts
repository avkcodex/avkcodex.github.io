
import { createAction, props } from '@ngrx/store';
import { Bookmark } from '../model/bookmarks.model';

export const loadBookmarks = createAction('[Bookmark] Load');

export const loadBookmarksSuccess = createAction(
  '[Bookmark] Load Success',
  props<{ bookmarks: Bookmark[] }>()
);

export const loadBookmarksFailure = createAction(
  '[Bookmark] Load Failure',
  props<{ error: any }>()
);

export const addBookmark = createAction(
  '[Bookmark] Add',
  props<{ bookmark: Bookmark }>()
);

export const addBookmarkSuccess = createAction(
  '[Bookmark] Add Success',
  props<{ bookmark: Bookmark }>()
);

export const addBookmarkFailure = createAction(
  '[Bookmark] Add Failure',
  props<{ error: any }>()
);

export const deleteBookmark = createAction(
  '[Bookmark] Delete',
  props<{ id: number }>()
);

export const deleteBookmarkSuccess = createAction(
  '[Bookmark] Delete Success',
  props<{ id: number }>()
);

export const deleteBookmarkFailure = createAction(
  '[Bookmark] Delete Failure',
  props<{ error: any }>()
);

export const updateBookmark = createAction(
  '[Bookmark] Update',
  props<{ bookmark: any }>()
);

export const updateBookmarkSuccess = createAction(
  '[Bookmark] Update Success',
  props<{ bookmark: any }>()
);

export const updateBookmarkFailure = createAction(
  '[Bookmark] Update Failure',
  props<{ error: any }>()
);

export const setSearch = createAction(
  '[Bookmark] Set Search',
  props<{ term: string }>()
);