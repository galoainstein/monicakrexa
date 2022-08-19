import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {

    this.circleLoader = document.querySelector('.circle-loader') as HTMLDivElement;
    this.checkmark = document.querySelector('.checkmark') as HTMLDivElement;
    this.progressBar = document.querySelector('.progress-bar') as HTMLDivElement;

    setTimeout(() => {
      this.circleLoader.classList.add('load-complete');
      this.checkmark.style.display = "block"
      setTimeout(() => {
        this.fillProgessBar(2500);
        setTimeout(() => {
          window.location.pathname = '/'
        },3500)
      }, 1000);
    },3000);
  }

  private fillProgessBar(time:number){
    for (let i = 0; i <= 100; i++) {
      setTimeout(() => {
        this.progressBar.style.width = `${i}%`;
      }, time/100 * i);
    }
  }

  private add1PercentToProgressBarWidth() {
    let currentWidth = this.progressBar.style.width;
    let newWidth = parseInt(currentWidth) + 1 + "%";
    this.progressBar.style.width = newWidth;
  }
}
