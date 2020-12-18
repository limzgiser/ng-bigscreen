import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ent-register-change',
  templateUrl: './ent-register-change.component.html',
  styleUrls: ['./ent-register-change.component.scss']
})
export class EntRegisterChangeComponent implements OnInit {

  constructor() { }
  mchartColor='#03D5A3'
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
