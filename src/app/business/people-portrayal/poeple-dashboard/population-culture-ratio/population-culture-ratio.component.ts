import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-population-culture-ratio',
  templateUrl: './population-culture-ratio.component.html',
  styleUrls: ['./population-culture-ratio.component.scss']
})
export class PopulationCultureRatioComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {
  }

}
