import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { CommonService } from '../common.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})

export class PiechartComponent implements OnInit {

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // barChartLabels: Label[];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];

  // barChartData: ChartDataSets[] = [
  //   { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
  // ];
  // constructor( public serv:CommonService) { 
  //   this.serv.getPieChatData().subscribe(
  //     data => {
  //       this.barChartLabels = data as string [];
  //       console.log(this.barChartLabels);
  //     },
  //     (err: HttpErrorResponse) => {
  //       console.log (err.message);
  //     }
  //   );
  // }
  
  constructor() { }
  
  doughnutChartLabels: Label[] = ['Female', 'Male', 'Unknown'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  
  ngOnInit(): void {
  }

}
