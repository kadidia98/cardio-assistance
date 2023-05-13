import { Component ,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {Socket, io }from 'socket.io-client';
import { SocketService } from '../services/socket.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  donnee:any
temoin:any
etat = false;


/* s:false
change(){
  if (this.etat == false) {
    this.s = true;

  }
} */
/* switch (key) {
  case value:

    break;

  default:
    break;
} */
bpm:any

  /* showTabD=true; */
constructor( private SocketService:SocketService, private router:Router){
  this.socket = io('ws://localhost:3000');
}
private socket: Socket;
open: boolean = true

/* switchTab(){
  this.showTabD ? this.showTabD = false : this.showTabD = true
} */
dataHandler(data: string) {
  console.log("From arduino -> " + data);
}
ngOnInit(): void {
  
  this.SocketService.getTemp().subscribe((data) =>{
  //console.log(data);
   this.donnee = data
 this.bpm = data
 console.log(this.bpm);
 

  

  })
  console.log(this.bpm);





}


  reset() {
    this.ngOnInit();
    location.reload();
  }
}
