import { Directive, HostListener, Input } from '@angular/core';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]',
  standalone: true,
})
export class CopyDirective {
  @Input('appCopy') textToCopy: string = '';

  constructor(private snackbarService: SnackbarService) {}

  @HostListener('click')
  onClick(): void {
    this.copyTextToClipboard(this.textToCopy);
    this.snackbarService.callSnackbar('Text copied to clipboard!');
  }

  private copyTextToClipboard(text: string): void {
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
}
