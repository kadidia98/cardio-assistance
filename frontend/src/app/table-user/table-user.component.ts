import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
// nécessaire au controle de saisie du formulare de modification
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { UsernameValidator } from './username.validator';

import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

//pagination

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css'],
})
export class TableUserComponent implements OnInit {
  public users:any = [];
 
// nécessaire au controle de saisie du formulare de modification

submitted=false;
invalid = false;
vide = false;
  id: any;
// pagination
  p: number = 1;
term: any;
updateForm: FormGroup;
  code: any;
   /* showcode: boolean;
  message: string;  */
  errMsg : any;
  showForm = false;

data : any;


  searchTerm = '';

 

  constructor(
   
    public formBuilder: FormBuilder,
    private userService: UserService,
    private url:ActivatedRoute
  ) {
      //Crontôle de saisie du formulaire
      this.updateForm = this.formBuilder.group({
        prenom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        nom:['',[Validators.required , UsernameValidator.cannotContainSpace]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
        role:['',Validators.required],
        telephone: ["", Validators.required],
      
        data:[0, Validators.required],
        matricule: ['']
    }
  )
   }

  ngOnInit(): void {
    //calling function which list users
    this.loadUser();

    //for update
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    // this.userService.singleUser()

  }
/*   passeIdentique(){

    if ( (this.updateForm.value.password != this.updateForm.value.passwordConfirm ) || (this.updateForm.value.passwordConfirm == '')) {
      this.invalid = true;
    }
    else{
      this.invalid = false;
    }

  } */
  registerUser(){
    this.submitted = true;
    /* this.passeIdentique(); */
    if(this.updateForm.invalid){
      return;
    }
    this.submitted=false;

  }


// function which list users
loadUser(){
  this.userService.listUser().subscribe((data:any) =>{
     this.users = data;
     //filtrer les données
     this.users = this.users.filter((e:any)=> e.etat == true && e.email != localStorage.getItem('email'))
console.log(data);


  });
}

//switch

/* changeRole=(id:any,role:any)=> {
  role == "Administrateur" ? role ="Utilisateur": role = "Administrateur"
  const user ={
   role : role
  } */
 /*  this.userService.updateUser(id,user).subscribe(
    data=>{ */
  /*     Swal.fire({
        title: 'swhitch!',
        text: 'voulez-vous vraiment changer de role ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
      }).then((result) => {
        if (result.value) {
      this.userService.updateUser(id,user).subscribe(
        data=>{
          this.ngOnInit();
        });
      }else if (result.dismiss === Swal.DismissReason.cancel) {
      }
      })
    } */
/* } */



 getUserData(id:any,prenom:any,nom:any,email:any){

  this.updateForm = this.formBuilder.group({
      id:[id],
      prenom: [prenom, [Validators.required,UsernameValidator.cannotContainSpace]],
      nom: [nom, [Validators.required, UsernameValidator.cannotContainSpace]],
      email: [email, [Validators.required, Validators.email]],
    });
  console.log(id)
}
// function d'archivage
Archiver(id:any, etat:any){

  etat == false ? etat = true: etat = false
  const user = {
   etat : etat,
   dateArchivage : 'vbv'
  }
  Swal.fire({
    title: 'Archivage!',
    text: 'voulez-vous vraiment archiver de role ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
  }).then((result) => {
    if (result.value) {
  this.userService.updateUser(id,user).subscribe(
    data=>{
      this.ngOnInit();
    });

  }else if (result.dismiss === Swal.DismissReason.cancel) {
  }
  })

}

 onUpdate(){



  if (this.updateForm.value.prenom.lenght) {

  } else {
    const id =  this.updateForm.value.id;
    const data ={
     prenom: this.updateForm.value.prenom,
     nom : this.updateForm.value.nom,
     email: this.updateForm.value.email
    }
    this.submitted = true;
    if(this.updateForm.invalid){
      return;
    }


  for (const iterator of this.users) {
    this.submitted = true
    
   if(this.updateForm.invalid){
    
    return ;
  }






  console.log(iterator.email  )
  if(iterator.email == this.updateForm.value.email && iterator._id != id){
    this.errMsg = "Email existe déjà";
    setTimeout(() => {
      this.errMsg=""
    }, 2000);
    return;
  }
}

      this.userService.updateUser(id, data).subscribe(
        data=>{
          this.ngOnInit();
          Swal.fire('Modification',
                    'Réussie !',
                    'success');
          //window.location.reload();
          window.setTimeout(function(){location.reload()},1500)
          
/* 
        },
      
        error => {
          this.errMsg = false
          setTimeout(()=>{ this.errMsg = true}, 2000); */
        }); 

  }

}

showFormEdit(id:any,prenom:any,nom:any,email:any){
  
  if(this.showForm){
    this.showForm =false 

  }else{

    this.getUserData(id,prenom,nom,email)
    this.showForm = true
  } 
}

reload(){
  window.location.reload()
}

deleteUser(data: any){
  this.userService.deleteUser(data._id).subscribe(data => {

  });
  this.users = this.users.filter((u:any) => u!==data)
  }
}