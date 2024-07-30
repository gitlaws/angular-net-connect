import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public title = '';
  @Input() public isHidden = true;
  @Output() public close = new EventEmitter<void>();

  public closeModal(): void {
    this.isHidden = true;
    this.close.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent): void {
    if (!this.isHidden) {
      this.closeModal();
    }
  }
}
