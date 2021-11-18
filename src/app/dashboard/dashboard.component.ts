import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // ChartType: string = 'bar';
  constructor() {}

  ngOnInit(): void {}

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public mbarChartLabels: string[] = [
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
  ];
  public barChartType: ChartType = 'bar';
  // public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: '#266ace',
      borderColor: '#266ace',
      pointBackgroundColor: '#266ace',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: '#266ace',
    },
  ];
  public barChartColors2: Array<any> = [
    {
      backgroundColor: 'red',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)',
    },
  ];
  public barChartData: any[] = [
    { data: [56, 85, 60, 57, 56, 58], label: 'Vehicle Sales' },
    // {data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B'}
  ];
  public barChartData2: any[] = [
    // { data: [56, 85, 60, 57, 56, 58, 80], label: 'Company A' },
    { data: [59, 85, 60, 80, 66, 55], label: 'Success Loans' },
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
      Math.random() * 100,
      Math.round(Math.random() * 100),
    ];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
