import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SocketService } from '../services/socket.service';
import {Socket, io }from 'socket.io-client';
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent  implements OnInit{
  public chart: any;
  temp! :any [];
  bpm: any;
  donnee:any
  constructor( private SocketService: SocketService){
    this.socket = io('ws://localhost:3000');
  }
  private socket: Socket;


  ngOnInit(): void {
      this.createChart();

      this.SocketService.getTemp().subscribe((data) =>{
        //console.log(data);
         this.donnee = data
       this.bpm = data
       console.log(this.bpm);
       
      
        
      
        })

  }

 


  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: 'bpm',
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });

  }
}
