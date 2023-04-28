import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'secretaire', component: SecretaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
