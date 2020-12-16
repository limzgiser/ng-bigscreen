import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-population-sex-ratio',
  templateUrl: './population-sex-ratio.component.html',
  styleUrls: ['./population-sex-ratio.component.scss']
})
export class PopulationSexRatioComponent implements OnInit {
  tmpData={
    "data": [{
            "age": "0-4",
            "value": 24145,
            "gender": "男"
        },
        {
            "age": "5-9",
            "value": 39743,
            "gender": "男"
        },
        {
            "age": "10-14",
            "value": 32165,
            "gender": "男"
        },
        {
            "age": "15-19",
            "value": 42726,
            "gender": "男"
        },
        {
            "age": "20-24",
            "value": 70666,
            "gender": "男"
        },
        {
            "age": "25-29",
            "value": 98956,
            "gender": "男"
        },
        {
            "age": "30-34",
            "value": 132691,
            "gender": "男"
        },
        {
            "age": "35-39",
            "value": 87460,
            "gender": "男"
        },
        {
            "age": "40-44",
            "value": 81999,
            "gender": "男"
        },
        {
            "age": "45-49",
            "value": 91775,
            "gender": "男"
        },
        {
            "age": "50-54",
            "value": 97867,
            "gender": "男"
        },
        {
            "age": "55-59",
            "value": 78403,
            "gender": "男"
        },
        {
            "age": "60-64",
            "value": 48012,
            "gender": "男"
        },
        {
            "age": "65-69",
            "value": 49249,
            "gender": "男"
        },
        {
            "age": "70-74",
            "value": 36115,
            "gender": "男"
        },
        {
            "age": "75-79",
            "value": 21903,
            "gender": "男"
        },
        {
            "age": "80-84",
            "value": 14103,
            "gender": "男"
        },
        {
            "age": "85-89",
            "value": 7034,
            "gender": "男"
        },
        {
            "age": "90-94",
            "value": 2375,
            "gender": "男"
        },
        {
            "age": "95-99",
            "value": 400,
            "gender": "男"
        },
        {
            "age": "100",
            "value": 43,
            "gender": "男"
        },
        {
            "age": "0-4",
            "value": 22111,
            "gender": "女"
        },
        {
            "age": "5-9",
            "value": 34670,
            "gender": "女"
        },
        {
            "age": "10-14",
            "value": 27541,
            "gender": "女"
        },
        {
            "age": "15-19",
            "value": 32379,
            "gender": "女"
        },
        {
            "age": "20-24",
            "value": 47702,
            "gender": "女"
        },
        {
            "age": "25-29",
            "value": 73368,
            "gender": "女"
        },
        {
            "age": "30-34",
            "value": 105369,
            "gender": "女"
        },
        {
            "age": "35-39",
            "value": 69729,
            "gender": "女"
        },
        {
            "age": "40-44",
            "value": 68755,
            "gender": "女"
        },
        {
            "age": "45-49",
            "value": 77518,
            "gender": "女"
        },
        {
            "age": "50-54",
            "value": 82766,
            "gender": "女"
        },
        {
            "age": "55-59",
            "value": 67160,
            "gender": "女"
        },
        {
            "age": "60-64",
            "value": 43120,
            "gender": "女"
        },
        {
            "age": "65-69",
            "value": 48505,
            "gender": "女"
        },
        {
            "age": "70-74",
            "value": 38281,
            "gender": "女"
        },
        {
            "age": "75-79",
            "value": 24562,
            "gender": "女"
        },
        {
            "age": "80-84",
            "value": 17757,
            "gender": "女"
        },
        {
            "age": "85-89",
            "value": 11548,
            "gender": "女"
        },
        {
            "age": "90-94",
            "value": 5597,
            "gender": "女"
        },
        {
            "age": "95-99",
            "value": 1445,
            "gender": "女"
        },
        {
            "age": "100",
            "value": 187,
            "gender": "女"
        }
    ]
}
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart) {

    const data = this.tmpData.data;

    chart.data(data);
    chart.scale('gender', {
      nice: true,
      sync: true
    });
    chart.padding=[0,0,30,50];
    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction('active-region');

    //chart.interval().position('year*sales');
    chart.facet('mirror', {
      fields: ['gender'],
      transpose: true,
      padding: [0, 0, 0, 0],
      eachView(view) {
        view.interval()
          .position('age*value')
          .color('gender', ['#42B1E0', '#B24969']);
      }
    });
    chart.axis('age',{
      position:'top',
      label:{
        style:{
          fill:'#ffffff'
        }
    }});
    chart.axis('value',{
      label:{
        style:{
          fill:'#ffffff'
        }
    }});
    chart.legend('gender',{
      marker:{
        symbol:'circle'
      },
      offsetY:10,
      label:{
        fill: '#FFFFFF'
      }
    });

    chart.render();
  }
}
