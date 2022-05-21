import { Component, OnInit } from '@angular/core';
import { PathScrollService } from '../shared/services/path-scroll.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(
    public pathScrollService: PathScrollService
  ) {}

  ngOnInit(): void { }

}
