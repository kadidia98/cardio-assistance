/*import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';




import { HTTP_INTERCEPTORS } from '@angular/common/http'; //intersepteurs


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
 DashboardComponent,

    InscriptionComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
   
    


  ],

  providers: [
    
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }

