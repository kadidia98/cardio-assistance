
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsernameValidator } from '../username.validator';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit{

  signupForm!: FormGroup

  prenom: any;
  nom: any;
  email: any;
  password: any;
  cryptpass: any;
  submitted = false;
  invalid = false;
  succes = false;
  pass: string = '';
  afficheTable = true
  afficheArchive = false
  activeTable = false;
  activeArchive = false;

  isActiveTable: boolean = true;
  isActiveArchive: boolean = false;

  identifiant = localStorage.getItem('prenom') + ' ' + localStorage.getItem('nom');



  vide = false;
  inputType: any = "password";
  inputType_txt = 0;
  inputType_pwd = 1;
  inputType_c: any = "password";
  inputType_txt_c = 0;
  inputType_pwd_c = 1;
  message: any
  changeMail: any = false;
  confirm: any = '';
  constructor(
    public formBuilder: FormBuilder, private Userservice:UserService, private router: Router,) {
    //Crontôle de saisie du formulaire
    this.signupForm = this.formBuilder.group({
      nom: ['', [Validators.required, UsernameValidator.cannotContainSpace]],
      prenom: ['', [Validators.required, UsernameValidator.cannotContainSpace]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', Validators.required],
      telephone: ['', Validators.required],
      matricule: [''],
      etat: [true, Validators.required],
    }
    )
  }

  destroy() {
    localStorage.clear();
    this.router.navigateByUrl('/')
  }


  ngOnInit() {


  }

  toggleActive() {
    this.isActiveTable = !this.isActiveTable;
  }




  aff(event:any) {
    this.afficheArchive =false
    this.activeArchive= false
    this.afficheTable = true
    this.activeTable= true

    this.isActiveTable = true;
    this.isActiveArchive = false;

    
  }

  affArchive(event:any) {
    this.afficheTable = false
    this.activeTable= false
    this.afficheArchive =true
    this.activeArchive= true

    this.isActiveTable = false;
    this.isActiveArchive = true;
   
  }


  registerUser() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }
    this.submitted = false;
    let matriculeGenerate;
     {
      this.confirm = '';
      const user = {
        prenom: this.signupForm.value.prenom,
        nom: this.signupForm.value.nom,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        role: this.signupForm.value.role,
        telephone: this.signupForm.value.telephone,
        etat: this.signupForm.value.etat,
        matricule:  this.signupForm.value.role =="medecin" ? matriculeGenerate= "MED"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1))
        :matriculeGenerate= "SEC"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1))
        
      }
      
      this.Userservice.ajout(user).subscribe(data =>{

        this.message = data;
        if (this.message.emailExiste == true) {
          this.changeMail = true;

        } else {
            Swal.fire('inscription reussit'),
             setTimeout(()=>{ window.location.reload();}, 1000)
        }


      }) 
         //générer matricule pour administrateur et utilisateur
  /*   let matriculeGenerate;
    this.signupForm.value.role =="medecin" ? matriculeGenerate= "MED"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1))
      :matriculeGenerate= "SEC"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)); */
     

  /*     if (this.message.emailExiste == true) {
        this.changeMail = true;

      } else {
        Swal.fire('inscription reussit'),
          setTimeout(() => { window.location.reload(); }, 1000)
      } */




    }


  } 

  eyes(type: any) {
    if (type == "password") {
      this.inputType_pwd = 0;
      this.inputType_txt = 1;
      this.inputType = "text";
      //console.log('type password');

    } else {
      this.inputType = "password";
      this.inputType_pwd = 1;
      this.inputType_txt = 0;
      //console.log('type text');
    }
  }






  async onSubmite() {

    this.submitted = true;
  }
  reset() {
    this.ngOnInit();
    location.reload();
  }

}
