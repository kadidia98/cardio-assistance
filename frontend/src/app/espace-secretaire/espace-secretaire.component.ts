//import { Component } from '@angular/core';
import { Component ,NgZone, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-espace-secretaire',
  templateUrl: './espace-secretaire.component.html',
  styleUrls: ['./espace-secretaire.component.css']
})
export class EspaceSecretaireComponent implements OnInit {
  afficheTablep = true
  afficheAjoutp = false
  activeTablep = false;
  activeAjoutp = false;

  isActiveTablep: boolean = true;
  isActiveAjoutp: boolean = false;


  constructor(private router:Router){

  }
  ngOnInit(): void {
      
  }
  toggleActive() {
    this.isActiveTablep = !this.isActiveTablep;
  }
  destroy() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }
  aff(event:any) {
    this.afficheAjoutp =false
    this.activeAjoutp= false
    this.afficheTablep = true
    this.activeTablep= true

    this.isActiveTablep = true;
    this.isActiveAjoutp = false;

    
  }

  affArchive(event:any) {
    this.afficheTablep = false
    this.activeTablep= false
    this.afficheAjoutp =true
    this.activeAjoutp= true

    this.isActiveTablep = false;
    this.isActiveAjoutp = true;
   
  }



}
