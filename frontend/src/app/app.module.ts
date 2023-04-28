import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { AdmissionPatientComponent } from './admission-patient/admission-patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { SecretaireComponent } from './secretaire/secretaire.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    
    InscriptionComponent,
    AdmissionPatientComponent,
    ListePatientComponent,
    DossierMedicalComponent,
    SecretaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
