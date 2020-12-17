import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-flow-culture',
  templateUrl: './people-flow-culture.component.html',
  styleUrls: ['./people-flow-culture.component.scss']
})
export class PeopleFlowCultureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tmpData=[
    { type: '研究生', value: 0.2},
    { type: '大学本科', value: 2},
    { type: '大学专科', value: 3},
    { type: '中专', value: 4},
    { type: '高中', value: 8},
    { type: '初中', value: 57},
    { type: '小学', value: 17},
    { type: '文盲', value: 1},
  ]
}
