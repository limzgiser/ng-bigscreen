import { Component, OnInit } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';

@Component({
  selector: 'app-city-portrayal',
  templateUrl: './city-portrayal.component.html',
  styleUrls: ['./city-portrayal.component.scss'],
})
export class CityPortrayalComponent implements OnInit {
  constructor(private cfhttpService: CfhttpService) {}

  tmpData = [
    [
      '新乡',
      [
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '新疆玛纳斯基地',
            value: 200,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '  ',
            value: 90,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: ' ',
            value: 40,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '呼和浩特',
            value: 90,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '昆明',
            value: 40,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '成都',
            value: 10,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '兰州',
            value: 95,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '银川',
            value: 90,
          },
        ],
        [
          {
            name: '新疆玛纳斯基地',
          },
          {
            name: '西宁',
            value: 80,
          },
        ],
      ],
    ],
  ];
  ngOnInit() {
     
  }

}