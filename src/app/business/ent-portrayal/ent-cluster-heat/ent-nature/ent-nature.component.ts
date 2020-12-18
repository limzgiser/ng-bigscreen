import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ent-nature',
  templateUrl: './ent-nature.component.html',
  styleUrls: ['./ent-nature.component.scss']
})
export class EntNatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tmpData= [
    { type: '国有企业', value: 38 },
    { type: '集团所有制企业', value: 52 },
    { type: '联合经营', value: 61 },
    { type: '三资企业', value: 145 },
    { type: '私营企业', value: 48 },
  ];
}
