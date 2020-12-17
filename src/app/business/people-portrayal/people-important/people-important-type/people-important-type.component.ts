import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-important-type',
  templateUrl: './people-important-type.component.html',
  styleUrls: ['./people-important-type.component.scss']
})
export class PeopleImportantTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data=[
    {
    "type":"在逃人员",
    "value":5386
    },
    {
    "type":"涉恐人员",
    "value":4378
    },
    {
    "type":"涉稳人员",
    "value":4185
    },
    {
    "type":"涉赌人员",
    "value":3035
    },
    {
    "type":"犯罪前科人员",
    "value":2644
    },
    {
    "type":"肇事精神病人",
    "value":1322
    },
    {
    "type":"重点上访人员",
    "value":1251
    }
    ]
}
