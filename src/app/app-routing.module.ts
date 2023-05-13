import { SinglePageComponent } from './single-page/single-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './clients/form/form.component';
import { ClientsModule } from './clients/clients.module';

const routes: Routes = [
  { path: 'pt/buyers', loadChildren: () => ClientsModule },
  { path: 'en/buyers', loadChildren: () => ClientsModule },
  { path: 'pt/home', component: SinglePageComponent },
  { path: 'en/home', component: SinglePageComponent },
  { path: 'en', redirectTo: '/en/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/pt/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
