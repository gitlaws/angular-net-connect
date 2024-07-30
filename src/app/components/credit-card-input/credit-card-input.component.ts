import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticatorService } from '../../services/authenticator/authenticator.service';

@Component({
  selector: 'app-credit-card-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;

  constructor(private authenticatorService: AuthenticatorService) {}

  public get isReadonly() {
    return this.readonly;
  }

  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value
      ? this.formatReadonlyCCNum(this.creditCardNumber)
      : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return onlyLast4Shown.join('-');
  }

  public isValidCard(): boolean {
    return this.authenticatorService.validateCreditCardNumber(
      this.creditCardNumber
    );
  }
}
