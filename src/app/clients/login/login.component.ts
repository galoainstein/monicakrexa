import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  explanation: HTMLDivElement;
  password: HTMLInputElement;
  view: HTMLButtonElement;
  login: HTMLButtonElement;
  incorrect: HTMLParagraphElement;
  unknown: HTMLAnchorElement;

  constructor(
    private loginService: LoginService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.explanation = document.querySelector('.explanation') as HTMLDivElement;
    this.view = document.querySelector('#view') as HTMLButtonElement;
    this.login = document.querySelector('#login') as HTMLButtonElement;
    this.password = document.querySelector('.password') as HTMLInputElement;
    this.incorrect = document.querySelector('.incorrect') as HTMLParagraphElement;
    this.unknown = document.querySelector('.unknown') as HTMLAnchorElement;

    this.login.addEventListener('click', () => {
      if(!this.loginService.attemptLogin(this.password.value)){
        this.incorrect.style.display = 'block';
      };
    })

    this.view.addEventListener('click', () => {
      this.togglePasswordVisibility();
    })

    this.unknown.addEventListener('click', () => {
      this.switchVisibility(this.explanation);
    })
  }

  public switchVisibility(element:HTMLDivElement|HTMLParagraphElement|HTMLAnchorElement) {
    const states = ['hidden', 'visible'];
    const currentState = element.style.visibility;
    const newState = states.find(state => state !== currentState) as string;
    element.style.visibility = newState;
  }

  private togglePasswordVisibility() {
    this.password.type = this.password.type === 'password' ? 'text' : 'password';
  }

}
