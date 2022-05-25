import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule
  ],
  declarations: [
    FormComponent,
    ThanksComponent,
    LoginComponent
  ],
  exports: [FormComponent]
})
export class ClientsModule { }
