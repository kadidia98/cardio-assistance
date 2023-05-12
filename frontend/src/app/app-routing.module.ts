import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { AdminComponent } from './admin/admin.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { AdmissionPatientComponent } from './admission-patient/admission-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { TableUserComponent } from './table-user/table-user.component';
import { EspaceSecretaireComponent } from './espace-secretaire/espace-secretaire.component';
import { DossierPComponent } from './dossier-p/dossier-p.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {path: '', component: LoginComponent},
{path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
{path: 'secretaire', component: SecretaireComponent, canActivate:[AuthGuard]},
{path: 'listP', component: ListePatientComponent, canActivate:[AuthGuard]},
{path: 'Admission', component: AdmissionPatientComponent, canActivate:[AuthGuard]},
{path: 'Dasboard', component: DashboardComponent, canActivate:[AuthGuard]},
{path: 'Dossier', component: DossierMedicalComponent, canActivate:[AuthGuard]},
{path: 'table-user', component: TableUserComponent, canActivate:[AuthGuard]},
{path: 'espaceSecretaire', component: EspaceSecretaireComponent, canActivate:[AuthGuard]},
{path: 'Dos_patient', component: DossierPComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
