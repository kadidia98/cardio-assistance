import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent {

showTab= true;

constructor(private router:Router){
  
}

switchTab(){
  this.showTab ? this.showTab = false : this.showTab = true
}
}
