import { Component, OnInit,Input } from '@angular/core';
import {BackgroundChartColors,ChartColors} from './ring-chart-colors';
@Component({
  selector: 'app-ring-chart',
  templateUrl: './ring-chart.component.html',
  styleUrls: ['./ring-chart.component.scss']
})
export class RingChartComponent implements OnInit {
  @Input() chartData;
  @Input() ringChartTitle='';
  chartColor;
  totalCount=0;
  constructor() {
   }

  ngOnInit() {
    this.chartData.forEach(element => {
      element['color']=ChartColors[this.chartData.indexOf(element)];
      element['background']=BackgroundChartColors[this.chartData.indexOf(element)];
      this.totalCount+=element.value;
    });
    console.log(this.chartData)
  }
  configureChart(chart){
    //需要注册图形
    const data = this.chartData;
    chart.data(data);
    chart.coordinate('theta',{
      radius: 1,
      innerRadius: 0.92,
    });
    chart
    .interval()
    .adjust('stack')
    .position('value')
    .style({
      stroke: 'black',
      lineWidth: 1,
    })  
    .color('type',ChartColors)
    chart.legend(false,{
    });
    
    chart.annotation().html({
      html:
      `<div style="width: 171px;height: 171px;
      display:flex;
      align-items:center;
      justify-content:center;
      border:linear-gradient(180deg, #0094C6 0%, #05216D 100%) 2px solid;
      border-radius: 50% ;
      background: linear-gradient(180deg, #0094C6 0%, #05216D 100%);"> 
        <div
        style="width: 169px;
        height: 169px;
        background: linear-gradient(0deg,rgba(6, 23, 45, 0.8) 0%,rgba(0, 13, 32, 0.7) 100%);
        border: 0px solid;
        border-radius: 50% ;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;">
          <div>
          <div style="margin-left: auto;
          margin-right: auto;
          width: fit-content;">
            <span style="font-size:36px;
            max-width:80px;
            font-family:DINAlternate-Bold,DINAlternate;
            font-weight:bold;
            color:rgba(148,239,228,1);
            line-height:42px;
            letter-spacing:2px;">${this.totalCount}
            </span>
            <span style="font-size:18px;
              font-family:SourceHanSansSC-Medium,SourceHanSansSC;
              font-weight:500;
              color:rgba(148,239,228,1);
              line-height:27px;
              letter-spacing:1px;
              justify-self:flex-end;
              margin-left:-8px">人
            </span>
            </div>
            <div style="    margin-left: auto;
            margin-right: auto;
        ">
            <span style='font-size:24px;
            font-family:SourceHanSansSC-Bold,SourceHanSansSC;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:36px;'>${this.ringChartTitle}
            </span>
            </div>
          </div>
        </div>
      </div>`,
      offsetX:-85,
      offsetY:25
    })
    chart.interaction('element-single-selected');
    chart.render();
  }
}
