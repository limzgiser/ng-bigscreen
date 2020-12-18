import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ent-economic-nature',
  templateUrl: './ent-economic-nature.component.html',
  styleUrls: ['./ent-economic-nature.component.scss']
})
export class EntEconomicNatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data=[
    {
    "type":"回族",
    "value":5386
    },
    {
    "type":"苗族",
    "value":4378
    },
    {
    "type":"土家",
    "value":4185
    },
    {
    "type":"彝族",
    "value":3035
    }
    ]
}
