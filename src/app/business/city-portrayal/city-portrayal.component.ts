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
    this.cfhttpService.get('base.map').subscribe((res) => {
      console.log(res);
    });
  }
  configureChart(chart) {
    // const data = [
    //   { year: '1951 年', sales: 38 },
    //   { year: '1952 年', sales: 52 },
    //   { year: '1956 年', sales: 61 },
    //   { year: '1957 年', sales: 145 },
    //   { year: '1958 年', sales: 48 },
    //   { year: '1959 年', sales: 38 },
    //   { year: '1960 年', sales: 38 },
    //   { year: '1962 年', sales: 38 },
    // ];
    // chart.data(data);
    // chart.scale('sales', {
    //   nice: true,
    // });
    // chart.tooltip({
    //   showMarkers: false,
    // });
    // chart.interaction('active-region');
    // chart.interval().position('year*sales');
    // chart.render();
  }
}
