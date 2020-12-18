import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-building-table',
  templateUrl: './building-table.component.html',
  styleUrls: ['./building-table.component.scss'],
})
export class BuildingTableComponent implements OnInit {
  constructor() {}
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

  floorData = [
    {
      label: '10层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '9层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '8层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '7层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '6层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '5层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '4层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
    {
      label: '3层',
      children: [
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
        {
          label: '10001',
        },
      ],
    },
  ];
  homeInfo = [
    {
      name: '张小妹',
      sex: '女',
      birthday: '1993.09.21',
      hj: '江苏省苏州市吴中区',
    },
    {
      name: '张小妹',
      sex: '女',
      birthday: '1993.09.21',
      hj: '江苏省苏州市吴中区',
    },
    {
      name: '张小妹',
      sex: '女',
      birthday: '1993.09.21',
      hj: '江苏省苏州市吴中区',
    },
    {
      name: '张小妹',
      sex: '女',
      birthday: '1993.09.21',
      hj: '江苏省苏州市吴中区',
    },
    {
      name: '张小妹',
      sex: '女',
      birthday: '1993.09.21',
      hj: '江苏省苏州市吴中区',
    },
  ];

  ngOnInit() {}
}
