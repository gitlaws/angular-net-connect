import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  constructor() {}

  validateCreditCardNumber(creditCardNumber: string): boolean {
    const iin = creditCardNumber.slice(0, 6);
    const mii = creditCardNumber[0];
    const bin = creditCardNumber.slice(1, 6);

    if (mii === '3' && (iin.startsWith('34') || iin.startsWith('37'))) {
      return true; // American Express
    } else if (mii === '4' && /^[2-6]/.test(bin)) {
      return true; // Visa
    } else if (mii === '5' && /^[2-6]/.test(bin)) {
      return true; // Mastercard
    } else if (mii === '6' && /^[0-6]/.test(bin)) {
      return true; // Discover
    }

    return false;
  }
}
