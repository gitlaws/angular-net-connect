import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  @Input() isShown = false;
  @Output() closed = new EventEmitter<void>();

  hide() {
    this.isShown = false;
    this.closed.emit();
  }

  showBottomSheet() {
    this.isShown = true;
  }
}
