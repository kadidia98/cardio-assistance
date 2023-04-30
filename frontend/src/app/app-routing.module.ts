import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { AdminComponent } from './admin/admin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { AdmissionPatientComponent } from './admission-patient/admission-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
{path: 'admin', component: AdminComponent},
{path: 'secretaire', component: SecretaireComponent},
{path: 'medcin', component: ListePatientComponent},
{path: 'Admission', component: AdmissionPatientComponent},
{path: 'Dasboard', component: DashboardComponent},
{path: 'Dossier', component: DossierMedicalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
