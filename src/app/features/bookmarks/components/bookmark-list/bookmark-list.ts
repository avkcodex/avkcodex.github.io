import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  standalone: true, 
  selector: 'app-bookmark-list',
  imports: [CommonModule, MatCardModule,MatIconModule, MatMenuModule],
  templateUrl: './bookmark-list.html',
  styleUrl: './bookmark-list.scss',
})
export class BookmarkListComponent {
@Input() bookmarks: any[] = [];
@Output() delete = new EventEmitter<number>();
// @Output() add = new EventEmitter<number>();
@Output() edit = new EventEmitter<number>();
}
