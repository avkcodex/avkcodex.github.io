import {Component, inject } from '@angular/core'
import {
  selectLoading,
  selectOlder,
  selectToday,
  selectYesterday
} from '../../store/bookmark.selector'
import { Store } from '@ngrx/store'
import {
  addBookmark,
  deleteBookmark,
  loadBookmarks,
  setSearch,
  updateBookmark
} from '../../store/bookmark.action'
import { CommonModule } from '@angular/common'
import { BookmarkListComponent } from '../bookmark-list/bookmark-list'
import { BookmarkFormComponent } from '../bookmark-form/bookmark-form'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { map } from 'rxjs'

@Component({
  standalone: true,
  selector: 'app-bookmark-pages',
  imports: [
    CommonModule,
    BookmarkListComponent,
    BookmarkFormComponent,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './bookmark-pages.html',
  styleUrl: './bookmark-pages.scss',
})
export class BookmarkPagesComponent {
  searchTerm: string = ''

  private readonly store = inject(Store)
  constructor () {}

  ngOnInit () {
    this.store.dispatch(loadBookmarks())
  }
  onSearchChange (value: string) {
    this.store.dispatch(setSearch({ term: value }))
  }
  today$ = this.store.select(selectToday)
  yesterday$ = this.store.select(selectYesterday)
  older$ = this.store.select(selectOlder)

  loading$ = this.store.select(selectLoading)

  isSelected = false
  view = 'view_list'

   clearSearch() {
    this.searchTerm = '';
    this.store.dispatch(setSearch({ term: '' })); 
  }

  toggleView () {
    this.isSelected = !this.isSelected
    this.view = this.isSelected ? 'view_module' : 'view_list'
  }

  add (bookmark: any) {
    this.store.dispatch(addBookmark({ bookmark }))
  }

  delete (id: number) {
    this.store.dispatch(deleteBookmark({ id }))
  }

  isOpen = false
  selectedBookmark: any = null

  openPanel () {
    this.selectedBookmark = null
    this.isOpen = true
  }

  openEdit (bookmark: any) {
    this.selectedBookmark = bookmark
    this.isOpen = true
  }

  closePanel () {
    this.isOpen = false
  }

  handleSave (bookmark: any) {
    if (bookmark.id) {
      this.store.dispatch(updateBookmark({ bookmark }))
    } else {
      this.store.dispatch(addBookmark({ bookmark }))
    }

    this.closePanel()
  }
}
