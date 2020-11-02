import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-my-pie-chart',
  templateUrl: './my-pie-chart.component.html',
  styleUrls: ['./my-pie-chart.component.scss']
})
export class MyPieChartComponent implements OnInit, OnChanges {

  @Input() graphLabels;
  @Input() graphData;

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.graphLabels);
    console.log(this.graphData);
    this.pieChartLabels = this.graphLabels;
    this.pieChartData = this.graphData;
  }
}
