import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  explanation: HTMLDivElement;

  constructor() { }

  ngOnInit(): void {
    this.explanation = document.querySelector('.explanation') as HTMLDivElement;
  }

  public switchExplanationVisibility() {{
    const states = ['hidden', 'visible'];
    const currentState = this.explanation.style.visibility;
    const newState = states.find(state => state !== currentState) as string;
    this.explanation.style.visibility = newState;
  }}

}
