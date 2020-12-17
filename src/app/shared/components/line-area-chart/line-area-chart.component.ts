import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-line-area-chart',
  templateUrl: './line-area-chart.component.html',
  styleUrls: ['./line-area-chart.component.scss']
})
export class LineAreaChartComponent implements OnInit {
  @Input() chartData;
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart){
    const data = this.chartData;
    chart.data(data);
    chart.tooltip({
      showCrosshairs: true,
    });
    chart.axis('year',{
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
    chart.padding=[20,20,80,50];
    chart.line().position('year*value').shape('smooth').color('#AB720B');
    chart.area().position('year*value').shape('smooth').color('l(270) 0:rgba(0,0,0,0) 0.7:rgba(143, 95, 7, 1)');
    chart.render();
  }
}
