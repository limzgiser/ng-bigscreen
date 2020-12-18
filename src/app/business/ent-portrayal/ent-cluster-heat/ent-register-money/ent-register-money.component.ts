import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ent-register-money',
  templateUrl: './ent-register-money.component.html',
  styleUrls: ['./ent-register-money.component.scss']
})
export class EntRegisterMoneyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mchartPadding=[20,0,80,50];
  tmpData= [
    { type: '0-50', value: 38 },
    { type: '50-100', value: 52 },
    { type: '100-500', value: 61 },
    { type: '500-1000', value: 145 },
    { type: '1000-5000', value: 48 },
    { type: '5000-10000', value: 38 },
    { type: '10000-', value: 38 },
  ];
}
