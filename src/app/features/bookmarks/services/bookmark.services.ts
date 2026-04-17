import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Bookmark } from "../model/bookmarks.model";

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private api = 'http://localhost:3000/bookmarks';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>('http://localhost:3000/bookmarks');
  }

  add(bookmark: Bookmark) {
    const newBookmark = {
    ...bookmark,
    createdAt: new Date().toISOString() 
  };
    return this.http.post<Bookmark>(this.api, newBookmark);
  }

  update(bookmark: any) {
  return this.http.put(`${this.api}/${bookmark.id}`, bookmark);
}

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}