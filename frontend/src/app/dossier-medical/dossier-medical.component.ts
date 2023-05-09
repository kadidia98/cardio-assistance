import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent  implements OnInit{
  AffichePatient = true;
  activeP =true;
  isactiveP=true;
  identifiant = localStorage.getItem('prenom') + ' ' + localStorage.getItem('nom');
constructor(private router:Router,private userService:UserService){

}
ngOnInit(): void {
    
}
destroy() {
  localStorage.removeItem('token');
  this.router.navigateByUrl('/')
}
toggleActiveP(){
  this.isactiveP=!this.isactiveP;
}

reload(){
  window.location.reload()
}

aff(event:any){
  this.AffichePatient=true;
  this.isactiveP=true;
  this.activeP= true;
}
}
