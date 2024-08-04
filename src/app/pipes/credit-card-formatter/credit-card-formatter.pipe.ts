import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
  standalone: true,
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Length.';
    }

    if (!this.isAllNumbers(cardNumber)) {
      return 'Invalid Characters.';
    }

    return this.formatCardNumber(cardNumber);
  }

  private isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber
      .split('')
      .filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharacters === cardNumber.length;
  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;

    return (
      cardNumberLength === isAmericanExpressCardLength ||
      cardNumberLength === isMasterDiscoverVisaCardLength
    );
  }

  private formatCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);

    return parts ? parts.join('-') : cardNumber;
  }
}
