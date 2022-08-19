import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  private password: string;
  private downloadButton: HTMLElement;

  private fullCatalogueURL: string =
    '../../../assets/catalogues/CATALOGUE MK.pdf';

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.setPassword();

    if (!this.loginService.validatePassword(this.password)) {
      window.location.pathname = '/buyers/login';
    }

    this.downloadButton = document.querySelector(
      '#download-catalogue'
    ) as HTMLElement;

    this.downloadButton.addEventListener('click', () => {
      window.location.pathname = `/buyers/login/view/${this.password}.full`;
    });
  }

  private setPassword() {
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
