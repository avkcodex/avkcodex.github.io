import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bookmark-form',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './bookmark-form.html',
  styleUrl: './bookmark-form.scss',
})
export class BookmarkFormComponent {
   @Input() bookmark: any; 
   @Output() save = new EventEmitter<any>();
  private readonly fb = inject(FormBuilder);
  constructor() {}
  form = this.fb.group({
    title: [''],
    url: ['']
  });

  ngOnChanges() {
    if (this.bookmark) {
      this.form.patchValue(this.bookmark);
    } else {
      this.form.reset();
    }
  }

  submit() {
    this.save.emit({
    ...(this.bookmark || {}),
      ...this.form.value
    });
    this.form.reset();
  }
}
