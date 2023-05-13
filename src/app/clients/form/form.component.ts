import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { BaseFormComponent } from '../../shared/base-form/base-form.component';
import { PostFormDataService } from './../../shared/services/post-form-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public postFormData: PostFormDataService,
    public translate: TranslateService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      storeName: [null, [Validators.required, Validators.minLength(1)]],
      name: [null, [Validators.required, Validators.minLength(1)]],
      cnpj: [null],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(8)]],
      site: [null],
      instagram: [null, [Validators.required, Validators.minLength(1)]],
      social: [null],
      address: [null, [Validators.required, Validators.minLength(1)]],
      message: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  public submit() {
    this.postFormData.postData(this.formulario.value);
    //window.location.pathname = '/buyers/thanks';
  }

  public getControl(name: string) {
    return this.formulario.get(name)! as FormControl;
  }

  public get submitText(): string {
    return this.translate.instant('buyers.form.submit');
  }
}
