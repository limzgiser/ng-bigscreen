import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-flow-age',
  templateUrl: './people-flow-age.component.html',
  styleUrls: ['./people-flow-age.component.scss']
})
export class PeopleFlowAgeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tmpData= [
    { type: '1951 年', value: 38 },
    { type: '1952 年', value: 52 },
    { type: '1956 年', value: 61 },
    { type: '1957 年', value: 145 },
    { type: '1958 年', value: 48 },
    { type: '1959 年', value: 38 },
    { type: '1960 年', value: 38 },
    { type: '1962 年', value: 38 },
  ];

}
