import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  @Input() isShown = false;

  hide() {
    this.isShown = false;
  }
}
