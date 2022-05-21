import { Directive } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Directive()
export abstract class BaseFormComponent {

  formulario: FormGroup;

  constructor() { }

  abstract submit(): any;

  public onSubmit() {
    if (this.formulario.valid) {
      this.submit();
      this.formulario.reset()
    } else {
      console.log('Formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  private verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo)!;
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  private verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo)!.valid &&
      (this.formulario.get(campo)!.touched || this.formulario.get(campo)!.dirty)
    );
  }

  private verificaRequired(campo: string) {
    return (
      this.formulario.get(campo)!.hasError('required') &&
      (this.formulario.get(campo)!.touched || this.formulario.get(campo)!.dirty)
    );
  }

  public aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }


}
