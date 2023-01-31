import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private text: string = 'love is all you need';
  private encryptedText: string =
    'U2FsdGVkX1+jordXTdOTn4DQOpojq47N0fdClZ0wXGU=';

  constructor(
    private translate: TranslateService
  ) {}

  public validatePassword(password: string): boolean {
    return this.decrypt(this.encryptedText) === password;
  }

  public attemptLogin(password: string): boolean {
    if (this.validatePassword(password)) {
      console.log('Login successful');
      window.location.pathname = `${this.translate.currentLang}/buyers/login/${password}`;
      return true;
    }
    console.log('Login failed');
    return false;
  }

  // private encrypt(value : string) : string{
  //   return CryptoJS.AES.encrypt(value, this.text.trim()).toString();
  // }

  private decrypt(textToDecrypt: string) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.text.trim()).toString(
      CryptoJS.enc.Utf8
    );
  }
}
