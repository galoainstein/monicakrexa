import { SinglePageComponent } from './single-page/single-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './clients/form/form.component';
import { ClientsModule } from './clients/clients.module';

const routes: Routes = [
  { path: 'buyers', loadChildren: () => ClientsModule },
  { path: '', component: SinglePageComponent }
  //{ path: 'clients', component: FormComponent }
  // { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
