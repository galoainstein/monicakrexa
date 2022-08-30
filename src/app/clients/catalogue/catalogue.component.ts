import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  private password: string;
  private downloadButton: HTMLElement;
  private downloadUrban: HTMLElement;

  private fullCatalogueURL: string = '../../../catalogues/CATALOGUE MK.pdf'

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setPassword()

    if (!this.loginService.validatePassword(this.password)){
      window.location.pathname = '/clients/login';
    }

    this.downloadButton = document.querySelector('#download-catalogue') as HTMLElement;

    this.downloadButton.addEventListener('click', () => {
      window.location.pathname = `/clients/login/view/${this.password}.full`
    })
    
    this.downloadUrban = document.querySelector('#download-catalogue-urban') as HTMLElement;
    this.downloadUrban.addEventListener('click', () => {
      window.location.pathname = `/clients/login/view/${this.password}.urban`
    })
    
  }

  private setPassword(){
    const param = this.route.snapshot.paramMap.get('password');
    if (param) {
      this.password = param;
    } else {
      this.password = '';
    }
  }

  private openPDF(url: string) {
    window.open(url, '_blank');
  }

}
