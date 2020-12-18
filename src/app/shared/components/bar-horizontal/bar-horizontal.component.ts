import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bar-horizontal',
  templateUrl: './bar-horizontal.component.html',
  styleUrls: ['./bar-horizontal.component.scss']
})
export class BarHorizontalComponent implements OnInit {
  @Input() chartData;
  @Input() chartColor='#42B1E0';
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
    .color(this.chartColor)
    .size(12);
    chart.axis('type',{
      label:{
        style:{
          fill:'#ffffff',
          fontSize:16,
          lineHeight:17
        },
        formatter:(val)=>{
          if(val.length>6){
            return val.substr(0,5)+'\n'+val.substr(5);
          }else{
            return val;
          }
        }
    }});
    chart.axis('value',{
      label:{
        style:{
            fill:'#ffffff',
            fontSize:16
        }
    }});
    chart.coordinate().transpose();
    chart.render();
  }
}
