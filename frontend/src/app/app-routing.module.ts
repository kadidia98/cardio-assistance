import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { AdminComponent } from './admin/admin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
{path: 'admin', component: AdminComponent},
{path: 'secretaire', component: SecretaireComponent},
{path: 'medcin', component: ListePatientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
