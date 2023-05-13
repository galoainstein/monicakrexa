import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BuyersComponent } from './buyers/buyers.component';
import { TextButtonComponent } from './buttons/text-button/text-button.component';
import { SquaredButtonComponent } from './buttons/squared-button/squared-button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    ErrorMsgComponent,
    InputFieldComponent,
    BuyersComponent,
    SquaredButtonComponent,
    TextButtonComponent,
  ],
  exports: [
    ErrorMsgComponent,
    InputFieldComponent,
    BuyersComponent,
    SquaredButtonComponent,
    TextButtonComponent,
  ],
  providers: [],
})
export class SharedModule {}
