import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-important-change',
  templateUrl: './people-important-change.component.html',
  styleUrls: ['./people-important-change.component.scss']
})
export class PeopleImportantChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data=[
    {'year':2016,'value':700},
    {'year':2017,'value':634},
    {'year':2018,'value':900},
    {'year':2019,'value':450},
    {'year':2020,'value':380},
  ];
}
