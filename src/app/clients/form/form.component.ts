import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

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
    public postFormData: PostFormDataService
  ) {
    super();
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nomeLoja: [null, [Validators.required, Validators.minLength(1)]],
      nomeRepresentante: [null, [Validators.required, Validators.minLength(1)]],
      cnpj: [null],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, [Validators.required, Validators.minLength(8)]],
      site: [null],
      instagram: [null, [Validators.required, Validators.minLength(1)]],
      outrasRedes: [null],
      endereco: [null, [Validators.required, Validators.minLength(1)]],
      mensagem: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  public submit() {
    this.postFormData.postData(this.formulario.value);
  }

  public getControl(name: string) {
    return this.formulario.get(name)! as FormControl;
  }
}
