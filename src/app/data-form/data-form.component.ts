import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseFormComponent } from '../shared/base-form/base-form.component';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent extends BaseFormComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
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
    console.log(this.formulario);

    if (this.formulario.valid) {
      
    }


    // let valueSubmit = Object.assign({}, this.formulario.value);

    // valueSubmit = Object.assign(valueSubmit, {
    //   frameworks: valueSubmit.frameworks
    //   .map((v: any, i: any) => v ? this.frameworks[i] : null)
    //   .filter((v: any) => v !== null)
    // });

    // console.log(valueSubmit);

    // this.http
    //     .post('https://httpbin.org/post', JSON.stringify({}))
    //     .subscribe(
    //       dados => {
    //         console.log(dados);
    //         // reseta o form
    //         // this.formulario.reset();
    //         // this.resetar();
    //       },
    //       (error: any) => alert('erro')
    //     );
  }

  public getControl(name: string){
    return this.formulario.get(name)! as FormControl;
  }
}
