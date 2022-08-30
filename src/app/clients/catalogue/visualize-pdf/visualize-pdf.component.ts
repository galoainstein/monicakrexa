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
  public file: ''|'full'|'urban';
  private iframe: HTMLIFrameElement;

  public links = {
    '': 'nothing',
    full: 'https://drive.google.com/file/d/1MgxmpJx92iSfOJBKBcRWfj6GN7KATVD7/preview',
    urban: 'https://drive.google.com/file/d/1_LISl3lsICIIJS3Kw24xAqs_sZu2EfHM/preview'
  }

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
      this.file = paramArray[1] as ''|'full'|'urban';

      this.iframe = document.querySelector(`#${this.file}`) as HTMLIFrameElement;
      this.iframe.hidden = false;
    } else {
      this.password = '';
      this.file = '';
    }
  }

}
