import { Component, OnInit } from '@angular/core';
import { GraphapiService } from '../services/graphapi.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  covidData;
  statesName = [];
  dischargedArr = [];
  confirmedArr = [];
  deathsArr = [];
  allInOne = [];
  indiaLabel = [];
  indiaData = [];

  constructor( private graphApi: GraphapiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.graphApi.getGraphData().subscribe(rawData => {
      this.covidData = rawData;
      this.covidData.data.regional.forEach(element => {
        this.statesName.push(element.loc);
        this.dischargedArr.push(element.discharged);
        this.confirmedArr.push(element.totalConfirmed);
        this.deathsArr.push(element.deaths);
      });

      this.indiaLabel = ['Confirmed', 'Discharged', 'Deaths'];
      this.indiaData = [
        this.covidData.data.summary.total,
        this.covidData.data.summary.discharged,
        this.covidData.data.summary.deaths ];
      this.allInOne = [ {data: this.dischargedArr , label: 'Discharged'},
      {data: this.confirmedArr , label: 'Confirmed'},
      {data: this.deathsArr , label: 'deaths'}
     ];
    });
  }

}
