import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopkeepers',
  templateUrl: './shopkeepers.component.html',
  styleUrls: ['./shopkeepers.component.scss']
})
export class ShopkeepersComponent implements OnInit {

  @Input() showSignUp = true

  private signUpButton: HTMLElement
  private loginButton: HTMLElement

  constructor() { }

  ngOnInit(): void {
    this.signUpButton = document.querySelector('#signUp') as HTMLElement
    this.loginButton = document.querySelector('#login') as HTMLElement

    this.signUpButton.addEventListener('click', () => {
      this.sendTo('/clients')
    })

    this.loginButton.addEventListener('click', () => {
      this.sendTo('/clients/login')
    })
  }

  public sendTo(path: string){
    window.location.href = path
  }

}
