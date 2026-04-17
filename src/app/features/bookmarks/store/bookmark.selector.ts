import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookmarkState } from './bookmark.reducer';

export const selectBookmarkState =
  createFeatureSelector<BookmarkState>('bookmarks');

export const selectAllBookmarks = createSelector(
  selectBookmarkState,
  state => state.bookmarks
);

export const selectLoading = createSelector(
  selectBookmarkState,
  state => state.loading
);

export const selectError = createSelector(
  selectBookmarkState,
  state => state.error
);

export const selectSearch = createSelector(
  selectBookmarkState,
  state => state.search
);

export const selectFilteredBookmarks = createSelector(
  selectAllBookmarks,
  selectSearch,
  (bookmarks, search) => {
    if (!search) return bookmarks;

    const term = search.toLowerCase();

    return bookmarks.filter(b =>
      b.title.toLowerCase().includes(term) ||
      b.url.toLowerCase().includes(term)
    );
  }
);

export const selectToday = createSelector(
  selectFilteredBookmarks,
  (bookmarks) => {
    const today = new Date().toDateString();

    return bookmarks.filter(b =>
      new Date(b.createdAt).toDateString() === today
    );
  }
);

export const selectYesterday = createSelector(
  selectFilteredBookmarks,
  (bookmarks) => {
    const y = new Date();
    y.setDate(y.getDate() - 1);

    const yesterday = y.toDateString();

    return bookmarks.filter(b =>
      new Date(b.createdAt).toDateString() === yesterday
    );
  }
);

export const selectOlder = createSelector(
  selectFilteredBookmarks,
  selectToday,
  selectYesterday,
  (all, today, yesterday) =>
    all.filter(b => !today.includes(b) && !yesterday.includes(b))
);