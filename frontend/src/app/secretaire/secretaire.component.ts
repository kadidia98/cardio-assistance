import { Component ,NgZone, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
/* import { Router, ActivatedRoute } from '@angular/router'; */
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

/* import UsersJson from '../users.json'; */
@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent  implements OnInit{
  public patients:any = [];
  pages: number = 1;
  searchText: any; // search installer npm i ng2-search-filter

  User: any = [];
  data: any;
  ngZone: any;
  vide = false;
  id: any;
// pagination
  p: number = 1;
term: any



  constructor(  private userService: UserService,  private router: Router) {}

  ngOnInit(): void {
    this.loadUser();
    
   /*  if (this.data.status == 401) {
      this.router.navigateByUrl("/connexion");
    } */
  }
  
  logout() {
  //  this.AuthService.doLogout();
  }
/* 
  changeRole = (id: any, role: any) => {
    role == 'administrateur'
      ? (role = 'utilisateur_simple')
      : (role = 'administrateur'); 
    const users = { role: role };
    if (confirm('Changer de role')) {
   
    }
  }; */

  // function which list users
loadUser(){
  this.userService.listPatient().subscribe((data:any) =>{
     this.patients = data;
    //filtrer les données
    this.patients = this.patients.filter((e:any)=> e.nom != localStorage.getItem('nom'))
  });
  }

}
