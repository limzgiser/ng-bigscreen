import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-vertical',
  templateUrl: './bar-vertical.component.html',
  styleUrls: ['./bar-vertical.component.scss']
})
export class BarVerticalComponent implements OnInit {
  @Input() chartData;
  @Input() chartPadding;
  @Input() chartColor="#42B1E0";
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart) {

    const data =this.chartData;
    if(this.chartPadding){
      chart.padding=this.chartPadding;
    }
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
    .color(this.chartColor)
    .size(12);
    chart.axis('type',{
      label:{
        style:{
          fill:'#ffffff',
          fontSize:16
        },
        autoHide:false
    }});
    chart.axis('value',{
      label:{
        style:{
            fill:'#ffffff',
            fontSize:16
        }
    }});
    chart.scale({
      value:{
        nice:true,
        //alias影响tooltip 需传入值
        alias:"人数"
      }
    })
    chart.render();
  }
}
