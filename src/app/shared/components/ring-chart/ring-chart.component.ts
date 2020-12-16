import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ring-chart',
  templateUrl: './ring-chart.component.html',
  styleUrls: ['./ring-chart.component.scss']
})
export class RingChartComponent implements OnInit {
  @Input() chartData;
  iconColor = [
    {
      icon: "#8FC522",
      iconBackground: "rgba(143,197,34,0.2)",
    },
    {
      icon: "#00AFFF",
      iconBackground: "rgba(0,175,255,0.2)",
    },
    {
      icon: "#A656D2",
      iconBackground: "rgba(166,86,210,0.2)",
    },
    {
      icon: "#CD3300",
      iconBackground: "rgba(205,51,0,0.2)",
    },
    {
      icon: "#FF9043",
      iconBackground: "rgba(255,144,67,0.2)",
    },
  ];
  constructor() {
   }

  ngOnInit() {
  }
  configureChart(chart){
    //需要注册图形
    const data = this.chartData;
    chart.data(data);
    chart.coordinate('theta',{
      radius: 1,
      innerRadius: 0.8,
    });
    chart
    .interval()
    .adjust('stack')
    .position('value')
    .style({
      stroke: 'black',
      lineWidth: 1,
    })  
    .color('type')
    //.shape('slice-shape');
    chart.legend({
      position: 'right',
     // custom:true,
      // item:{

      // }
    });
    chart.interaction('element-single-selected');
    chart.render();
  }
}
