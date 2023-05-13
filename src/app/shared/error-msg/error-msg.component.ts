import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

  // @Input() msgErro: string;
  // @Input() mostrarErro: boolean;

  @Input() control: FormControl;
  @Input() label: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  get errorMessage() {

    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          let errorMessage = this.translate.instant(`buyers.form.errorMessages.${propertyName}`)

          if (errorMessage.includes('{{field}}')) {
            errorMessage = errorMessage.replace('{{field}}', this.label)
          }

          if (errorMessage.includes('{{requiredValue}}')) {
            console.log(this.control.errors)
            const value = this.control.errors['minlength']['requiredLength']
            errorMessage = errorMessage.replace('{{requiredValue}}', value)
          }

          return errorMessage;
        }
    }

    return null;
  }

}
