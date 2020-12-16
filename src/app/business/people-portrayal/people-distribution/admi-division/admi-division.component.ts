import { Component, OnInit, Input } from '@angular/core';
import { MapboxmapService } from 'src/app/cityfun/mapbox-map/service/mapboxmap.service';
import { CfhttpService } from 'src/app/services/cfhttp.service';
import { bbox } from '@turf/turf';
import {
  region_level_01_fill,
  region_level_01_Border,
  region_level_01_Symbol,
  layerids,
} from './styles/style';
import { maxBy, minBy } from 'lodash';
import { min } from 'rxjs/operators';
@Component({
  selector: 'app-admi-division',
  templateUrl: './admi-division.component.html',
  styleUrls: ['./admi-division.component.scss'],
})
export class AdmiDivisionComponent implements OnInit {
  constructor(
    private cfhttpService: CfhttpService,
    private mapboxmapService: MapboxmapService
  ) {}
  @Input() labelList = [];
  selectNode = {
    geo_name: '常熟市',
  };
  showList: true | false = false;

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

  listData_GeoJSON = null;

  mapboxglmap = null;
  ngOnInit() {
    this.mapboxmapService.init().then((mapboxglmap: any) => {
      this.mapboxglmap = mapboxglmap;
      if (
        mapboxglmap.isStyleLoaded() ||
        this.mapboxmapService.firstFullLoaded
      ) {
        this.mapInit();
      }
      mapboxglmap.on('load', () => {
        this.mapInit();
      });
    });
  }
  /**
   * 一级地名点击查询
   * @param item
   * @param gType
   */
  fnodeClick(item, gType) {
    this.selectNode = item;
    let { geo_code } = item;
    this.getLevel1GeoJSONByCode(geo_code, gType);
  }
  /**
   * 二级地名点击查询
   */
  cnodeClick(item, gType) {
    this.selectNode = item;
    let { geo_code } = item;
    this.getLevel1GeoJSONByCode(geo_code, gType);
  }
  /**
   * 列表项点击
   */
  listItemClick(item) {
    let { groupid, xzqhbm, geo_name } = item.properties;
    console.log(item);
    if (groupid <= 3) {
      this.selectNode.geo_name = geo_name;
      this.getLevel1GeoJSONByCode(xzqhbm, groupid);
    }
  }
  /**
   * 查询地块及统计数据
   * @param xzcode
   * @param cnodeClick
   */
  getLevel1GeoJSONByCode(xzcode, cnodeClick) {
    this.cfhttpService
      .get('region-sta-geojson', {
        params: {
          typeid: cnodeClick,
          xzcode: xzcode,
        },
      })
      .subscribe((result) => {
        if (!result.Data) {
          return ;
        }
        this.mapboxmapService.removeLayerByIds(layerids);
        this.listData_GeoJSON = this.setGeoColors(result.Data);
        region_level_01_fill.source.data = this.listData_GeoJSON;
        region_level_01_Border.source.data = this.listData_GeoJSON;
        region_level_01_Symbol.source.data = this.listData_GeoJSON;
        this.mapboxglmap.addLayer(region_level_01_fill);
        this.mapboxglmap.addLayer(region_level_01_Border);
        this.mapboxglmap.addLayer(region_level_01_Symbol);
        var bbbox = bbox({
          type: 'FeatureCollection',
          features: this.listData_GeoJSON.features,
        });
        this.mapboxglmap.fitBounds(bbbox, { padding: 20 });
      });
  }

  mapInit() {
    this.getLevel1GeoJSONByCode('320581000', 1); // 常熟市区
  }

  setGeoColors(geojson) {
    if (!geojson) {
      return;
    }
    if (!geojson.features || geojson.features.length < 0) {
      return;
    }

    let maxItem = maxBy(geojson.features, (item) => {
      return Number(item.properties.stat_inds_val);
    });
    let minItem = minBy(geojson.features, (item) => {
      return Number(item.properties.stat_inds_val);
    });
    let colors = [
      '#022135',
      '#064D61',
      '#04656B',
      '#0C9579',
      '#05B474',
    ].reverse();
    let bettenValue =
      maxItem.properties.stat_inds_val - minItem.properties.stat_inds_val;
    geojson.features.forEach((item) => {
      if (bettenValue == 0) {
        item.properties.color = colors[colors.length - 1];
      } else {
        console.log();
        item.properties.color =
          colors[
            ((item.properties.stat_inds_val -
              minItem.properties.stat_inds_val) /
              (bettenValue / (colors.length - 1))) >>
              0
          ];
      }
    });
    return geojson;
  }
  areaListMouseenter($event) {
    this.showList = true;
  }
  areaListMouseleave($event) {
    this.showList = false;
  }
}
