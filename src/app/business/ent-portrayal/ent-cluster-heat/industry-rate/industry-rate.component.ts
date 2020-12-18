import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-rate',
  templateUrl: './industry-rate.component.html',
  styleUrls: ['./industry-rate.component.scss']
})
export class IndustryRateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tmpData= [
    { type: '服装批发', value: 38 },
    { type: '食品饮料', value: 52 },
    { type: '纺织服装', value: 61 },
    { type: '互联网零售', value: 145 },
    { type: '餐营业', value: 48 },
    { type: '纺织业', value: 38 },
    { type: '批发业', value: 48 },
    { type: '零售业', value: 48 },
  ];
}
