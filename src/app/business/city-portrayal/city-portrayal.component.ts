import { Component, OnInit } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';

@Component({
  selector: 'app-city-portrayal',
  templateUrl: './city-portrayal.component.html',
  styleUrls: ['./city-portrayal.component.scss'],
})
export class CityPortrayalComponent implements OnInit {
  constructor(private cfhttpService:CfhttpService) {}

  ngOnInit() {
    this.cfhttpService.get('base.map').subscribe(res=>{
      console.log(res);
    }) 
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
