import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientsRoutingModule } from './clients-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { ThanksComponent } from './thanks/thanks.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { VisualizePdfComponent } from './catalogue/visualize-pdf/visualize-pdf.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    TranslateModule
  ],
  declarations: [
    FormComponent,
    ThanksComponent,
    LoginComponent,
    CatalogueComponent,
    VisualizePdfComponent
  ],
  exports: [FormComponent]
})
export class ClientsModule { }