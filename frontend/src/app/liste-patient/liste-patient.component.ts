import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../services/user.service";
// nécessaire au controle de saisie du formulare de modification
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from '../username.validator';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

showTab= true;
showTabD=true;
public patients:any = [];
// nécessaire au controle de saisie du formulare de modification
  signupForm: FormGroup;
submitted=false;
invalid = false;
vide = false;
  id: any;
// pagination
  p: number = 1;
term: any;
data: any
showInfo = false
showForm = false;

constructor(
  private userService: UserService,
  public formBuilder: FormBuilder
) {
   //Crontôle de saisie du formulaire
   this.signupForm = this.formBuilder.group({
    prenom:['',[Validators.required ,UsernameValidator.cannotContainSpace]],
    nom:['',[Validators.required ,UsernameValidator.cannotContainSpace]],
    sexe:['',Validators.required],
    groupe_sanguin:['',Validators.required],
    poids: ['', Validators.required],
    telephone: ['', Validators.required],
    dateNaiss:['', Validators.required],
    dateAdmission: ['', Validators.required],
    numero_dossier:['']

    
}
)
}

ngOnInit(): void {
      //calling function which list patients
      this.loadUser();


}

registerUser(){
  this.submitted = true;

  if(this.signupForm.invalid){
    return;
  }
  this.submitted=false;

}

getUserData(id:any,prenom:any,nom:any, sexe:any,groupe_sanguin:any, poids: any, telephone:any, dateNaiss:any, dateAdmission:any, numero_dossier:any){

  this.signupForm = this.formBuilder.group({
      id:[id],
      prenom: [prenom],
      nom: [nom],
      sexe: [sexe],
      groupe_sanguin:[groupe_sanguin],
      poids: [poids],
      telephone: [telephone],
      dateNaiss:[dateNaiss],
      dateAdmission: [dateAdmission],
      numero_dossier:[numero_dossier]
    });
  console.log(id)
}
// function which list users
loadUser(){
this.userService.listPatient().subscribe((data:any) =>{
   this.patients = data;
  //filtrer les données
  this.patients = this.patients.filter((e:any)=> e.nom != localStorage.getItem('nom'))
});
}


switchTab(){
  // this.showTab ? this.showTab = false : this.showTab = true
  if (this.showTab) {
    this.showTab = false
    this.showInfo = true
  } else {
    this.showTab = true
    this.showInfo = false
  }
}

showFormEdit(id:any,prenom:any,nom:any,sexe:any , groupe_sanguin:any, poids: any, telephone:any, dateNaiss:any, dateAdmission:any, numero_dossier:any){
  this.showForm = true;
  // if(this.showForm){
  //   this.showForm =false 

  // }else{

    this.getUserData(id,prenom,nom,sexe, groupe_sanguin, poids, telephone, dateNaiss, dateAdmission, numero_dossier)
    // this.showForm = true
    this.switchForm()
  // } 
}
switchForm(){
  if (this.showForm) {
    this.showTab = false
    this.showInfo = false
  }
} 
}
