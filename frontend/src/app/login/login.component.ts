import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  errMsg: any;
  submitted = false;
  showcode = false;
  code :any;
  message :any;
  // yeux
  inputType : any = "password";
  inputType_pwd :any;
  inputType_txt :any;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}

  loginUser() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
// appellle service login
      this.userService.login(this.registerForm.value).subscribe(
        (data:any) => {
          console.log(data.role);


          let tmp = data;
          this.code = data.code;
          if(this.code == "noEmail"){
            this.showcode = true;
            htmlStr: this.message = "L'email saisie n'existe pas !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "compteNoActive"){
            this.showcode = true;
            htmlStr: this.message = "Ce compte a été déactivé !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }else if (this.code == "noPassword"){
            this.showcode = true;
            htmlStr: this.message = "Mots de passe incorrect !";
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }else if (this.code == "erreur"){
            this.showcode = true;
            htmlStr: this.message = "Une erreur c'est produite, !";
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          } else{
          localStorage.setItem('token', tmp.data.token);
          localStorage.setItem('id', tmp.data.userId);
          localStorage.setItem('prenom', tmp.data.prenom);
          localStorage.setItem('nom', tmp.data.nom);
          localStorage.setItem('role', tmp.data.role);
          localStorage.setItem('matricule', tmp.data.matricule);
          localStorage.setItem('email', tmp.data.email);
          if ((tmp.data.role == 'admin')) {
              this.router.navigate(['/admin'])
            }
            else if ((tmp.data.role == 'secretaire')) {
              this.router.navigate(['/espaceSecretaire'])
            }
            else if ((tmp.data.role == 'medecin')) {
              this.router.navigate(['/Dossier'])
            }
            
        /*     else{
              this.router.navigate(['/tableArchive'])
            } */
        }
      });
        }





      }
