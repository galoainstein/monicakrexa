import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss'],
})
export class BuyersComponent implements OnInit {
  @Input() showSignUp = true;

  private signUpButton: HTMLElement;
  private loginButton: HTMLElement;

  constructor(
    public translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.signUpButton = document.querySelector('#signUp') as HTMLElement;
    this.loginButton = document.querySelector('#login') as HTMLElement;

    this.signUpButton.addEventListener('click', () => {
      this.sendTo(this.linkWithLang('/buyers'));
    });

    this.loginButton.addEventListener('click', () => {
      this.sendTo(this.linkWithLang('/buyers/login'));
    });
  }

  public sendTo(path: string) {
    window.location.href = path;
  }

  get signUpText(): string {
    return this.translate.instant('buyers.buttons.signUp');
  }

  get loginText(): string {
    return this.translate.instant('buyers.buttons.login');
  }

  private linkWithLang(link: string){
    const lang = this.translate.currentLang;
    return lang + link;
  }
}
