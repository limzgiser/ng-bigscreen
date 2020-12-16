import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-backtoback',
  templateUrl: './bar-backtoback.component.html',
  styleUrls: ['./bar-backtoback.component.scss']
})
export class BarBacktobackComponent implements OnInit {
  @Input() chartData;
  constructor() { }

  ngOnInit() {
  }
  configureChart(chart) {

    const data = this.chartData.data;

    chart.data(data);
    chart.scale('gender', {
      nice: true,
      sync: true
    });
    chart.padding = [0, 0, 50, 50];
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
    chart.axis('age', {
      position: 'top',
      label: {
        style: {
          fill: '#ffffff',
          fontSize: 16
        }
      }
    });
    chart.axis('value', {
      label: {
        style: {
          fill: '#ffffff',
          fontSize: 16
        }
      }
    });
    chart.legend('gender', {
      marker: {
        symbol: 'circle'
      },
      offsetY: 5,
      itemName: {
        style: {
          fill: '#FFFFFF',
          fontSize: 18
        }
      }
    });

    chart.render();
  }
}
