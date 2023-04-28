import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
{path: 'admin', component: AdminComponent},
{path: 'secretaire', component: SecretaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
