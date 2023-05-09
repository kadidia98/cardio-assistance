import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsernameValidator } from '../username.validator';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-admission-patient',
  templateUrl: './admission-patient.component.html',
  styleUrls: ['./admission-patient.component.css']
})
export class AdmissionPatientComponent implements OnInit {
  signupForm !: FormGroup;
submitted=false;
invalid = false;
vide = false;
inputType:any = "password";
inputType_txt = 0;
inputType_pwd = 1;
inputType_c:any = "password";
inputType_txt_c = 0;
inputType_pwd_c = 1;
message:any
changeMail:any = false;
confirm:any = '';
  /* registerForm !: FormGroup;
  submitted = false;
 */
  constructor(private formBuilder: FormBuilder ,private Userservice:UserService) {
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

  ngOnInit() {
     /*  this.registerForm = this.formBuilder.group({
        prenom: ['', Validators.required],
          date_naiss: ['', Validators.required],
          sexe: ['', Validators.required],
          pods: ['', Validators.required],
          nom: ['', Validators.required],
          date_Admission : ['', Validators.required],
          group_sang : ['', Validators.required],
          tel: ['', [Validators.required, Validators.minLength(9)]]
      }); */

  }
  passeIdentique(){
    if ( (this.signupForm.value.password != this.signupForm.value.passwordConfirm ) || (this.signupForm.value.passwordConfirm == '')) {
      this.invalid = true;
    }
    else{
      this.invalid = false;
    }

  }

  registerUser(){
    this.submitted = true;
    this.passeIdentique();
    if(this.signupForm.invalid){
      return;
    }
    this.submitted=false;
    if (this.invalid == true) {
      this.confirm = "pas identique";

    }
    
    else{
      this.confirm = '';

      const user = {
        nom:this.signupForm.value.nom,
        prenom:this.signupForm.value.prenom,
        groupe_sanguin:this.signupForm.value.groupe_sanguin,
        poids:this.signupForm.value.poids,
        sexe:this.signupForm.value.sexe,
        telephone:this.signupForm.value.telephone,
        dateNaiss:this.signupForm.value.dateNaiss,
        dateAdmission:this.signupForm.value.dateAdmission,
        numero_dossier :  "Nd"+(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1))

      }

        this.Userservice.ajouterPatient(user).subscribe(data =>{

          this.message = data;
          if (this.message.emailExiste == true) {
            this.changeMail = true;

          } else {
              Swal.fire('inscription reussit'),
               setTimeout(()=>{ window.location.reload();}, 1000)
          }


        }) 

    }


  }

  eyes (type:any) {
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
  eyes_confirm (type:any) {

    if (type == "password") {
       this.inputType_pwd_c = 0;
       this.inputType_txt_c = 1;
       this.inputType_c = "text";
       //console.log('type password');

    } else {
      this.inputType_c = "password";
      this.inputType_pwd_c = 1;
      this.inputType_txt_c = 0;
      //console.log('type text');
    }
  }

}


  // convenience getter for easy access to form fields
  /* get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  } */

