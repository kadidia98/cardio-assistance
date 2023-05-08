

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';




import { SecretaireComponent } from './secretaire/secretaire.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
;
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TableUserComponent } from './table-user/table-user.component'; //intersepteurs
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { ListeArchiveComponent } from './liste-archive/liste-archive.component';
import { filter } from 'rxjs';
import { AdmissionPatientComponent } from './admission-patient/admission-patient.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { EspaceSecretaireComponent } from './espace-secretaire/espace-secretaire.component';
import { DossierPComponent } from './dossier-p/dossier-p.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
 DashboardComponent,
 
AdmissionPatientComponent,
    InscriptionComponent,

TableUserComponent,
    InscriptionComponent,
    FilterPipe,
    ListeArchiveComponent,
    AdmissionPatientComponent,
    ListePatientComponent,
    DossierMedicalComponent,
    EspaceSecretaireComponent,
    SecretaireComponent,
    DossierPComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
 NgxPaginationModule,
 Ng2SearchPipeModule,
 
    


  ],

  providers: [
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

