import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-graph',
  templateUrl: './circle-progress-graph.component.html',
  styleUrls: ['./circle-progress-graph.component.scss']
})
export class CircleProgressGraphComponent implements OnInit {
  @Input() chartdata;
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart){
    let data=[this.chartdata]
    data.push({ type: '其他', value: 100 - data[0].value });
    chart.data(data);
    chart.legend(false);
    chart.coord("theta", {
      radius: 1,
      innerRadius: 0.8,
    });
    chart
      .interval()
      .position("value")
      .adjust('stack')
      .color('type',['#0a9afe',"rgba(116, 121, 120, 0.5)"])
      .style({
        opacity: 1,
      });

    chart.annotation().html({
      offsetX:-12,
      offsetY:15,
      html: `
              <div style="display:flex;
                align-items:center;
                justify-content:center;">
                  <span style='
                  font-family:DINAlternate-Bold,DINAlternate;
                  font-size:40px
                  font-weight:bold;
                  color: #C5CCD3;;
                  line-height:37px;'>${this.chartdata.value}%</span>
              </div>`,
    });
    chart.render();
  }

}
