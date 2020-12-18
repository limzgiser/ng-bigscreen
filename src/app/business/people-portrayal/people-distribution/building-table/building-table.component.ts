import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.scss']
})
export class BuildingTableComponent implements OnInit {

  constructor() { }
  indexStatistics = [
    {
      label: '总人口',
      value: 3201,
      unit: '人',
    },
    {
      label: '低保户',
      value: 2,
      unit: '人',
    },
    {
      label: '残疾人',
      value: 2,
      unit: '人',
    },
    {
      label: '党员',
      value: 2,
      unit: '人',
    },
  ];
  ngOnInit() {
  }

}
