import { Component, OnInit, Input } from '@angular/core';
import { MapboxmapService } from 'src/app/cityfun/mapbox-map/service/mapboxmap.service';
import { CfhttpService } from 'src/app/services/cfhttp.service';
import { bbox } from '@turf/turf';
import {
  region_fill,
  region_border,
  region_symbol,
  active_fill_color,
  layerids,
  default_fill_color,
} from './styles/style';
import { maxBy, minBy, cloneDeep } from 'lodash';
import { first, min } from 'rxjs/operators';
import { group } from '@angular/animations';
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
  @Input() labelList = null
  xhrs = {};
  crumbsData = {
    level_1: {
      geo_code: '320581000',
      geo_name: '常熟市',
      groupid: 0,
    },
  };

  selectNode = {
    geo_name: '常熟市',
    groupid: null,
    geo_code: '320581000',
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
    let { geo_code, geo_name } = item;
    if (geo_name == '常熟市') {
      gType = 0;
    }
    this.selectNode.geo_name = geo_name;
    this.getLevel1GeoJSONByCode(geo_code, gType);
    // this.selectNode = {
    //   geo_name: geo_name,
    //   groupid: gType,
    //   geo_code: geo_code,
    // };
  }
  /**
   * 二级地名点击查询
   */
  cnodeClick(item, gType) {
    let { geo_code, geo_name } = item;
    this.selectNode.geo_name = geo_name;
    this.getLevel1GeoJSONByCode(geo_code, gType);
    // this.selectNode = {
    //   geo_name: geo_name,
    //   groupid: gType,
    //   geo_code: geo_code,
    // };
  }
  /**
   * 列表项点击
   */
  listItemClick(item) {
    //  console.log(item);
    let { groupid, xzqhbm, geo_name } = item.properties;
    if (groupid <= 3) {
      this.getLevel1GeoJSONByCode(xzqhbm, groupid);
      this.selectNode.geo_name = geo_name;
    }
  }
  /**
   * 查询地块及统计数据
   * @param xzcode
   * @param cnodeClick
   */
  getLevel1GeoJSONByCode(xzcode, groupid) {
    let rex = this.cfhttpService
      .get('region-sta-geojson', {
        params: {
          typeid: groupid,
          xzcode: xzcode,
        },
      })
      .subscribe((result) => {
        if (!result.Data) {
          return;
        }
        this.listData_GeoJSON = this.setGeoLevel(result.Data);
        this.renderGeoJsonData(xzcode, groupid);
      });
    this.xhrs[groupid] = rex;
  }

  mapInit() {
    this.getLevel1GeoJSONByCode('320581000', 0); // 常熟市区
  }

  setGeoLevel(geojson) {
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

    let bettenValue =
      maxItem.properties.stat_inds_val - minItem.properties.stat_inds_val;
    geojson.features.forEach((item) => {
      if (bettenValue == 0) {
        item.properties.color = 0;
      } else {
        item.properties.level =
          ((item.properties.stat_inds_val - minItem.properties.stat_inds_val) /
            (bettenValue / (5 - 1))) >>
          0;
      }
    });
    return geojson;
  }

  renderGeoJsonData(xzcode, groupid) {
    if (this.selectNode.groupid === groupid) {
      // 直接定位，不绘制
      if (this.selectNode.geo_code === xzcode) {
        // 直接定位
        var bbbox = bbox({
          type: 'FeatureCollection',
          features: this.listData_GeoJSON.features,
        });
        this.mapboxglmap.fitBounds(bbbox, { padding: 50 });
        this.setActiveTLayerStyle(groupid);
      } else {
        // 移除后绘制，
        let rmlayers = [];
        layerids.forEach((item) => {
          rmlayers.push(item + '_' + groupid);
        });
        this.mapboxmapService.removeLayerByIds(rmlayers);
        this.setUnActiveLayerStyle(groupid);
        this.renderLayer(groupid);
        this.selectNode.groupid = groupid;
      }
    } else {
      // 叠加图层，不清除
      this.setUnActiveLayerStyle(groupid);
      this.renderLayer(groupid);
      this.selectNode.groupid = groupid;
    }
    // 移除高于当前级别的图层
    this.removeTopLevelLayer(groupid);
  }
  renderLayer(groupid) {
    let fill = cloneDeep(region_fill);
    let border = cloneDeep(region_border);
    let symbol = cloneDeep(region_symbol);
    fill.source.data = this.listData_GeoJSON;
    border.source.data = this.listData_GeoJSON;
    symbol.source.data = this.listData_GeoJSON;
    fill.id = fill.id + '_' + groupid;
    border.id = border.id + '_' + groupid;
    symbol.id = symbol.id + '_' + groupid;
    this.mapboxmapService.removeLayerByIds([fill.id, border.id, symbol.id]);
    this.mapboxglmap.addLayer(fill);
    this.mapboxglmap.addLayer(border);
    this.mapboxglmap.addLayer(symbol);
    var bbbox = bbox({
      type: 'FeatureCollection',
      features: this.listData_GeoJSON.features,
    });
    this.mapboxglmap.fitBounds(bbbox, { padding: 50 });
  }
  /**
   * 移除大于当前级别图层
   */
  removeTopLevelLayer(groupid) {
    let fill = cloneDeep(region_fill);
    let border = cloneDeep(region_border);
    let symbol = cloneDeep(region_symbol);
    for (let i = groupid + 1; i < 4; i++) {
      let ids = [fill.id + '_' + i, border.id + '_' + i, symbol.id + '_' + i];
      this.mapboxmapService.removeLayerByIds(ids);
    }
  }
  // 灰掉状态
  setUnActiveLayerStyle(groupid) {
    let fill = cloneDeep(region_fill);
    let border = cloneDeep(region_border);
    let symbol = cloneDeep(region_symbol);
    for (let i = 0; i < groupid; i++) {
      let fillid = fill.id + '_' + i;
      let borderid = border.id + '_' + i;
      if (this.mapboxglmap.getLayer(fillid)) {
        this.mapboxglmap.setPaintProperty(
          fillid,
          'fill-color',
          active_fill_color
        );
      }
      if (this.mapboxglmap.getLayer(borderid)) {
        this.mapboxglmap.setPaintProperty(borderid, 'line-width', 1);
        this.mapboxglmap.setPaintProperty(borderid, 'line-color', '#0a0f12');
      }
    }
  }
  // 恢复高亮
  setActiveTLayerStyle(groupid) {
    let fill = cloneDeep(region_fill);
    let border = cloneDeep(region_border);
    let symbol = cloneDeep(region_symbol);
    let fillid = fill.id + '_' + groupid;
    let borderid = border.id + '_' + groupid;
    if (this.mapboxglmap.getLayer(fillid)) {
      this.mapboxglmap.setPaintProperty(
        fillid,
        'fill-color',
        default_fill_color
      );
    }
    if (this.mapboxglmap.getLayer(borderid)) {
      this.mapboxglmap.setPaintProperty(borderid, 'line-width', 2);
      this.mapboxglmap.setPaintProperty(borderid, 'line-color', '#fff');
    }
  }
  areaListMouseenter($event) {
    this.showList = true;
  }
  areaListMouseleave($event) {
    this.showList = false;
  }
  ngOnDestroy(): void {
    // 取消网络请求订阅
    Object.keys(this.xhrs).forEach((key) => {
      this.xhrs[key].unsubscribe();
    });
    // 移除图层
    let fillid = region_fill.id;
    let borderid = region_border.id;
    let symbolid = region_symbol.id;
    let layers = this.mapboxglmap.getStyle().layers;
    layers.forEach((layer) => {
      if (
        layer.id.indexOf(fillid) > -1 ||
        layer.id.indexOf(borderid) > -1 ||
        layer.id.indexOf(symbolid) > -1
      ) {
        this.mapboxglmap.removeLayer(layer.id);
      }
    });
    console.log(this.mapboxglmap.getStyle().layers);
  }
}
