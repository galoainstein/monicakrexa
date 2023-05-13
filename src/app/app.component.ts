import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'monicakrexa';
  currentLang: string = 'pt';

  constructor(
    public translate: TranslateService
  ) {  
    translate.addLangs(['pt', 'en']);  
    translate.setDefaultLang(this.currentLang);  
    translate.store.currentLang = this.currentLang; 
    setTimeout(() => {
      this.currentLang = window.location.pathname.split('/')[1];
      translate.setDefaultLang(this.currentLang);  
      translate.store.currentLang = this.currentLang; 
    }, 100);
  } 

  switchLang(lang: string) {  
    this.translate.use(lang);  
  }  

}
