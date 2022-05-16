import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopkeepers',
  templateUrl: './shopkeepers.component.html',
  styleUrls: ['./shopkeepers.component.scss']
})
export class ShopkeepersComponent implements OnInit {

  @Input() showSignUp = true

  constructor() { }

  ngOnInit(): void {
  }

  public sendTo(path: string){
    window.location.href = path
  }

}
