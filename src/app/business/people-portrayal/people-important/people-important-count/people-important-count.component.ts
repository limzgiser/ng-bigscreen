import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-important-count',
  templateUrl: './people-important-count.component.html',
  styleUrls: ['./people-important-count.component.scss']
})
export class PeopleImportantCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tmpData= [
    { type: '在逃人员', value: 38 },
    { type: '涉恐人员', value: 52 },
    { type: '涉稳人员', value: 61 },
    { type: '肇事精神病人', value: 145 },
    { type: '重点上访人员', value: 48 },
    { type: '重大刑事犯罪前科人员', value: 38 },
  ];
}
