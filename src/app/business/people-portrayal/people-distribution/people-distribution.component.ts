import { Component, OnInit } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';
import { MainFormatService } from 'src/app/shared/services/main-format.service';
import { groupBy, cloneDeep, find } from 'lodash';

@Component({
  selector: 'app-people-distribution',
  templateUrl: './people-distribution.component.html',
  styleUrls: ['./people-distribution.component.scss'],
})
export class PeopleDistributionComponent implements OnInit {
  constructor(private cfhttpService: CfhttpService) {}

  geoRegionLevel_01 = null;
  showBuildTabel = false;
  labelList = [];
  indexStatistics = [
    {
      label: '总人口',
      value: 3201.31,
      unit: '万人',
    },
    {
      label: '户籍人口',
      value: 123.81,
      unit: '万人',
    },
    {
      label: '总人口',
      value: 100.31,
      unit: '万人',
    },
  ];
  ngOnInit() {
    // 新增区划
    this.getRegionPeopGeo();
  }
  regionClick(params) {
    console.log('人口分布钻去查询参数:');
    console.log(params);
  }

  /**
   * 一级行政区划人口统计
   */
  getRegionPeopGeo() {
    this.cfhttpService.get('peop-sta-leavel-1').subscribe((result) => {
      this.geoRegionLevel_01 = cloneDeep(result.Data);
      let gropyByData = groupBy(cloneDeep(result.Data), (item) => {
        delete item.geo_shape;
        return item.parent_geo_id;
      });
      let labelList = [];
      for (let id in gropyByData) {
        let item = find(result.Data, (ktem) => ktem.geo_code == id);
        if (!item) {
          continue;
        }
        delete item.geo_shape;
        item.children = gropyByData[id];
        labelList.push(item);
      }
      this.labelList = labelList;
    });
  }
}
