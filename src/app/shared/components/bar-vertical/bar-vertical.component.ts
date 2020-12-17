import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-vertical',
  templateUrl: './bar-vertical.component.html',
  styleUrls: ['./bar-vertical.component.scss']
})
export class BarVerticalComponent implements OnInit {
  @Input() chartData;
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart) {

    const data =this.chartData;

    chart.data(data);
    chart.scale('value', {
      nice: true,
    });

    chart.tooltip({
      showMarkers: false,
    });
    chart.interaction('active-region');

    chart.interval()
    .position('type*value')
    .color('#42B1E0')
    .size(12);
    chart.axis('type',{
      label:{
        style:{
          fill:'#ffffff',
          fontSize:16
        }
    }});
    chart.axis('value',{
      label:{
        style:{
            fill:'#ffffff',
            fontSize:16
        }
    }});
    chart.render();
  }
}
