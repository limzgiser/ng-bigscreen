import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ent-brief',
  templateUrl: './ent-brief.component.html',
  styleUrls: ['./ent-brief.component.scss']
})
export class EntBriefComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  indexStatistics = [
    {
      label: '规上企业',
      value: 10677,
      unit: '家',
    },
    {
      label: '高新技术企业',
      value: 16077,
      unit: '家',
    },
    {
      label: '智能制造',
      value: 3451,
      unit: '家',
    },
    {
      label: '专精特新',
      value: 16077,
      unit: '家',
    },
    {
      label: '守合同重信用',
      value: 16077,
      unit: '家',
    },
    {
      label: '上市公司',
      value: 3451,
      unit: '家',
    },
  ];
}
