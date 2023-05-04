import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent  implements OnInit{
  AffichePatient = true;
  activeP =true;
  isactiveP=true;
constructor(private router:Router,){

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

aff(event:any){
  this.AffichePatient=true;
  this.isactiveP=true;
  this.activeP= true;
}
}
