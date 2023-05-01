import { Component ,NgZone, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
/* import { Router, ActivatedRoute } from '@angular/router'; */
import Swal from 'sweetalert2';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; /* recherche */

/* import UsersJson from '../users.json'; */
@Component({
  selector: 'app-secretaire',
  templateUrl: './secretaire.component.html',
  styleUrls: ['./secretaire.component.css']
})
export class SecretaireComponent  implements OnInit{

  pages: number = 1;
  searchText: any; // search installer npm i ng2-search-filter

  User: any = [];
  data: any;
  ngZone: any;

  deconnect() {
    Swal.fire({
      title: 'Déconnexion',
      text: 'Êtes-vous sûre de vouloir vous déconnecter ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON',
    }).then((result) => {
      if (result.value) {
        // this.ngZone.run(() => this.router.navigateByUrl(''));
        this.logout();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        result.dismiss === Swal.DismissReason.cancel;
      }
    });
  }

  constructor( private router: Router) {}

  ngOnInit(): void {
    
    if (this.data.status == 401) {
      this.router.navigateByUrl("/connexion");
    }
  }
  
  logout() {
  //  this.AuthService.doLogout();
  }

  changeRole = (id: any, role: any) => {
    role == 'administrateur'
      ? (role = 'utilisateur_simple')
      : (role = 'administrateur'); /* pour switche */
    const users = { role: role };
    if (confirm('Changer de role')) {
     /*  this.AuthService.update(id, users).subscribe((data) => {
        this.ngOnInit();
      }); */
    }
  };

  changeEtat = (id: any, etat: any) => {
    etat == true ? (etat = false) : (etat = true); /* pour switche */
    const users = { etat: etat };
    if (confirm('Voulez vous archiver ?')) {
      /* this.AuthService.update(id, users).subscribe((data) => {
        this.ngOnInit();
      }); */
    }
  };

}
