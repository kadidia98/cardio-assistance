import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { SocketService } from '../services/socket.service';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  public chart!: Chart;
  public bpm!: any;
  private socket: Socket;

  constructor(private socketService: SocketService) {
    this.socket = io('ws://localhost:3000');
  }

  ngOnInit(): void {
    let tab: number[] = [];

    this.socketService.getTemp().subscribe((data) => {
      this.bpm = data;
      tab.push(this.bpm);
      this.updateChart(tab);
    });
  }

  createChart(bpmData: number[]): void {
    const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['1000ms', '2000ms', '3000ms', '4000ms', '5000ms', '6000ms', '7000ms', '8000ms'],
        datasets: [
          {
            label: "Pulse",
            data: bpmData,
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  updateChart(bpmData: number[]): void {
    if (this.chart) {
      this.chart.destroy();
    }
    this.createChart(bpmData);
  }
}
