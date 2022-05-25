import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', component:  FormComponent },
  { path: 'thanks', component:  ThanksComponent },
  { path: 'login', component:  LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
