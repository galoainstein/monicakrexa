import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

import { PathScrollService } from '../shared/services/path-scroll.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(
    public pathScrollService: PathScrollService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void { }

  public selectLang(lang: string){
    this.translate.use(lang);
  }

}
