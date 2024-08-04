import { Component, Inject } from '@angular/core';
import { FlattenPipe } from '../flatten/flatten.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flatten-array',
  standalone: true,
  imports: [CommonModule, FormsModule, FlattenPipe],
  templateUrl: './flatten-array.component.html',
  styleUrls: ['./flatten-array.component.scss'],
})
export class FlattenArrayComponent {
  nestedArray: any[] = [];
  flattenedArray: any[] = [];

  constructor(@Inject(FlattenPipe) private flattenPipe: FlattenPipe) {}

  onFlatten() {
    this.flattenedArray = this.flattenPipe.transform(this.nestedArray);
  }
}
