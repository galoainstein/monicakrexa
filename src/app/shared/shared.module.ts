import { ShopkeepersComponent } from './shopkeepers/shopkeepers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { SquaredButtonComponent } from './buttons/squared-button/squared-button.component';
import { TextButtonComponent } from './buttons/text-button/text-button.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ErrorMsgComponent,
    InputFieldComponent,
    ShopkeepersComponent,
    SquaredButtonComponent,
    TextButtonComponent
  ],
  exports: [
    ErrorMsgComponent,
    InputFieldComponent,
    ShopkeepersComponent,
    SquaredButtonComponent,
    TextButtonComponent
  ],
  providers: []
})
export class SharedModule { }
