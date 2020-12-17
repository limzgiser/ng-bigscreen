import { Component, OnInit,OnChanges,Input } from '@angular/core';

@Component({
  selector: 'app-event-list-bar',
  templateUrl: './event-list-bar.component.html',
  styleUrls: ['./event-list-bar.component.scss']
})
export class EventListBarComponent implements OnInit,OnChanges {
  @Input()
  vwith = 630;
  constructor() { }
  @Input() data;
  @Input() barColor="#38D898";
  ngOnInit() {
    this.data = this.listBarFormat(this.data);
  }
 /**
   * @param data 格式化列表数据
   * 计算数字所占宽度比例
   */
  listBarFormat(data) {
    const source = _.sortBy(data, function (o) {
      return -Number(o.value);
    });
    const dataArr = [];
    const self = this;
    if (source) {
      _.forEach(source, function (i) {
        i.width = (Number(i.value) / Number(source[0].value)) * self.vwith;
        dataArr.push(i);
      });
      return dataArr;
    }
  }
  ngOnChanges() {
    this.data = this.listBarFormat(this.data);
  }
}
