import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maintaining',
  templateUrl: './maintaining.component.html',
  styleUrls: ['./maintaining.component.scss']
})
export class MaintainingComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
