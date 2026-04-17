import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPages } from './bookmark-pages';

describe('BookmarkPages', () => {
  let component: BookmarkPages;
  let fixture: ComponentFixture<BookmarkPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
