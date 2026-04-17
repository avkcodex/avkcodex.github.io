import { createReducer, on } from '@ngrx/store';
import * as BookmarkActions from './bookmark.action';
import { Bookmark } from '../model/bookmarks.model';

export interface BookmarkState {
  bookmarks: Bookmark[];
  loading: boolean;
  error: any;
  search: string;
}

export const initialState: BookmarkState = {
  bookmarks: [],
  loading: false,
  error: null,
  search: ''
};

export const bookmarkReducer = createReducer(
  initialState,

  on(BookmarkActions.loadBookmarks, state => ({
    ...state,
    loading: true
  })),

  on(BookmarkActions.loadBookmarksSuccess, (state, { bookmarks }) => ({
    ...state,
    bookmarks,
    loading: false
  })),

  on(BookmarkActions.loadBookmarksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(BookmarkActions.addBookmarkSuccess, (state, { bookmark }) => ({
    ...state,
    bookmarks: [...state.bookmarks, bookmark]
  })),

  on(BookmarkActions.deleteBookmarkSuccess, (state, { id }) => ({
    ...state,
    bookmarks: state.bookmarks.filter(b => b.id !== id)
  })),

    on(BookmarkActions.updateBookmarkSuccess, (state, { bookmark }) => ({
   ...state,
  bookmarks: state.bookmarks.map(b =>
    b.id === bookmark.id ? bookmark : b
  )
  })),

  on(BookmarkActions.setSearch, (state, { term }) => ({
  ...state,
  search: term
}))
  
);