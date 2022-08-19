import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { VisualizePdfComponent } from './catalogue/visualize-pdf/visualize-pdf.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', component:  FormComponent },
  { path: 'thanks', component:  ThanksComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'login/view/:file', component:  VisualizePdfComponent },
  { path: 'login/:password', component:  CatalogueComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/buyers' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
