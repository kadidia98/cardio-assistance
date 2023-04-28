import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  profileForm!:FormGroup

  prenom:any;
  nom:any;
  email:any;
  password:any;
  cryptpass:any;
    submitted=false;
    invalid = false;
    succes = false;
    
  
      pass: string = '';
    
      constructor(
         public formBuilder: FormBuilder,  ) {
        this.profileForm = this.formBuilder.group({
  
          actuelPass:['',[Validators.required ]],
          newPass:['',[Validators.required]],
         newPasswordconfirm:['', [Validators.required]],
  
      }
      )
      }
   
  
  
  
      ngOnInit(){
       
        
     }
  
  
   
  
      async onSubmite(){
  
        this.submitted = true;
      
  
       
  
  
  
        
  
  
  
      }
  
   
}
