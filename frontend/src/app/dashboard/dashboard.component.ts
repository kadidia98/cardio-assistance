import { Component ,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /* showTabD=true; */
constructor(private router:Router){

}

/* switchTab(){
  this.showTabD ? this.showTabD = false : this.showTabD = true
} */

ngOnInit(): void {
    
}



  reset() {
    this.ngOnInit();
    location.reload();
  }
}
