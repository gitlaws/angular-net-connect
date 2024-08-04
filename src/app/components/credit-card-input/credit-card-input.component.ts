import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticatorService } from '../../services/authenticator/authenticator.service';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter/credit-card-formatter.pipe';

@Component({
  selector: 'app-credit-card-input',
  standalone: true,
  imports: [CommonModule, FormsModule, CreditCardFormatterPipe],
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss'],
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;
  cardNumber: any;

  constructor(private authenticatorService: AuthenticatorService) {}

  public get isReadonly(): boolean {
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
      return index < parts.length - 1 ? '****' : part;
    });
    return onlyLast4Shown.join(' ');
  }

  public isValidCard(): boolean {
    return this.validateCreditCardNumber(this.creditCardNumber);
  }

  private validateCreditCardNumber(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber
      .split('')
      .filter((char) => stringNumbers.includes(char)).length;

    return (
      (cardNumberLength === isAmericanExpressCardLength ||
        cardNumberLength === isMasterDiscoverVisaCardLength) &&
      totalValidCharacters === cardNumber.length
    );
  }

  public getCardType(): string {
    const cardNumber = this.creditCardNumber;
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(cardNumber)) {
      return 'Visa';
    } else if (/^5[1-5][0-9]{14}$/.test(cardNumber)) {
      return 'MasterCard';
    } else if (/^3[47][0-9]{13}$/.test(cardNumber)) {
      return 'American Express';
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(cardNumber)) {
      return 'Discover';
    } else {
      return 'Unknown';
    }
  }
}
