import { Component, OnInit } from '@angular/core';
import { setTokenAutoRefreshEnabled } from 'firebase/app-check';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {
  
  circleLoader: HTMLDivElement;
  checkmark: HTMLDivElement;
  progressBar: HTMLDivElement;

  constructor() { }

  ngOnInit(): void {

    this.circleLoader = document.querySelector('.circle-loader') as HTMLDivElement;
    this.checkmark = document.querySelector('.checkmark') as HTMLDivElement;
    this.progressBar = document.querySelector('.progress-bar') as HTMLDivElement;

    setTimeout(() => {
      this.circleLoader.classList.add('load-complete');
      this.checkmark.style.display = "block"
      setTimeout(() => {
        this.fillProgessBarAndRedirect(2500);
      }, 1000);
    },3000);
  }

  private fillProgessBarAndRedirect(time:number){
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        this.progressBar.style.width = `${i}%`;
      }, time/100 * i);
    }
    //window.location.pathname = '/'
  }

  private add1PercentToProgressBarWidth() {
    let currentWidth = this.progressBar.style.width;
    let newWidth = parseInt(currentWidth) + 1 + "%";
    this.progressBar.style.width = newWidth;
  }
}
