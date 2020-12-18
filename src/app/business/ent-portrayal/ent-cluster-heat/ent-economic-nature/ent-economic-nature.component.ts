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
  data = [
    {
      "type": "非公司企业法人",
      "value": 14
    },
    {
      "type": "有限责任公司",
      "value": 23
    },
    {
      "type": "股份有限责任公司",
      "value": 41
    },
    {
      "type": "个体工商户",
      "value": 23
    },
    {
      "type": "私营独资企业",
      "value": 15
    },
    {
      "type": "私营合伙企业",
      "value": 33
    }
  ]
}
