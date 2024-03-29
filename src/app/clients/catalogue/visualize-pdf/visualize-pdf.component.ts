import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-visualize-pdf',
  templateUrl: './visualize-pdf.component.html',
  styleUrls: ['./visualize-pdf.component.scss']
})
export class VisualizePdfComponent implements OnInit {

  private password: string;
  public file: string;
  private iframe: HTMLIFrameElement;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setParams()

    if (!this.loginService.validatePassword(this.password)){
      window.location.pathname = '/clients/login';
    }
  }

  private setParams(){
    const param: string|null = this.route.snapshot.paramMap.get('file');
    if (param) {
      const paramArray: string[] = param.split('.')
      this.password = paramArray[0];
      this.file = paramArray[1];
      this.iframe = document.querySelector(`#${this.file}`) as HTMLIFrameElement;
      this.iframe.hidden = false;
    } else {
      this.password = '';
      this.file = '';
    }
  }

}
