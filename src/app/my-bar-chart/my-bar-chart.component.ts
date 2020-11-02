import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit, OnChanges {

  @Input() graphLabels;
  @Input() graphData;

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [{data: [65, 59, 80, 81, 56, 55], label: 'Series A'}]
  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.barChartLabels = this.graphLabels;
    this.barChartData = this.graphData;
  }
}
