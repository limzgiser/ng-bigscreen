import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-population-change',
  templateUrl: './population-change.component.html',
  styleUrls: ['./population-change.component.scss']
})
export class PopulationChangeComponent implements OnInit {
  data=[
    {'year':2016,'value':700},
    {'year':2017,'value':634},
    {'year':2018,'value':900},
    {'year':2019,'value':450},
    {'year':2020,'value':380},
  ];

  constructor() { }

  ngOnInit() {
  }

}
