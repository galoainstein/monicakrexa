import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anodized',
  templateUrl: './anodized.component.html',
  styleUrls: ['./anodized.component.scss']
})
export class AnodizedComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
