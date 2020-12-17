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
import { maxBy, minBy, cloneDeep, sortBy } from 'lodash';
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
  @Input() labelList = null;
  mapEvent = {};
  xhrs = {}; // 网络请求订阅
  crumbArr = null; // 面包屑数组
  // 面包屑 数据集
  crumbs = {
    'level-0': {
      geo_name: '常熟市',
      groupid: 0,
      geo_code: '320581000',
    },
  };
  // 当前选中节点
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
    this.updateCrumbs('常熟市', '320581000', 0);
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
    this.updateCrumbs(geo_name, geo_code, gType);
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
  cnodeClick(item, gType, fnode?) {
    let { geo_code, geo_name } = item;
    this.selectNode.geo_name = geo_name;
    this.getLevel1GeoJSONByCode(geo_code, gType);
    this.updateCrumbs(fnode.geo_name, fnode.geo_code, gType - 1);
    this.updateCrumbs(geo_name, geo_code, gType);
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
    let { groupid, xzqhbm, geo_name } = item.properties;
    if (groupid <= 3) {
      this.updateCrumbs(geo_name, xzqhbm, groupid);
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
    this.bindMapEvent();
    this.getLevel1GeoJSONByCode('320581000', 0); // 常熟市区

    this.mapboxglmap.on('click','region_fill_0', e=>{
      alert(11111111111111111111);
     });
  }
  /**
   * 绑定地图事件
   */
  bindMapEvent() {
    const self = this;
    let levels = [0, 1, 2, 3];
    for (let key of levels) {
      let eventLayerId = region_fill.id + `_${key}`;
      if (this.mapEvent[eventLayerId]) {
        this.mapboxglmap.off('click', this.mapEvent[eventLayerId]);
      }
      this.mapEvent[eventLayerId] = function (e) {
         console.log(e.features);
      };
      // console.log(eventLayerId)
      // this.mapboxglmap.on('click','region_fill_0', e=>{
      //  alert(123);
      // });
    }
    setTimeout(()=>{
      console.log(this.mapboxglmap.getStyle().layers);
    },2000)

  }
  /**
   * 处理数据、根据人口设计分层设色级别
   */
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

  /**
   * 渲染数据
   * @param xzcode
   * @param groupid
   */
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
  /**
   * 添加图层
   */
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
  // 地图图层灰掉状态
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
  // 地图图层恢复高亮
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

  /**
   * 更新面包屑
   */
  updateCrumbs(gname, gcode, gtype) {
    this.crumbs['level-' + gtype] = {
      geo_name: gname,
      groupid: gtype,
      geo_code: gcode,
    };
    let crumbsArr = [];
    Object.keys(this.crumbs).forEach((key) => {
      let item = this.crumbs[key];
      if (item.groupid <= gtype) {
        crumbsArr.push(item);
      }
    });
    sortBy(crumbsArr, (item) => {
      item.groupid;
    });
    this.crumbArr = crumbsArr;
  }
  /**
   * 面包屑点击
   */
  crumbsClick(item) {
    let { geo_name, groupid, geo_code } = item;
    this.getLevel1GeoJSONByCode(geo_code, groupid);
    this.updateCrumbs(geo_name, geo_code, groupid);
  }
  /**
   * 移入标题、下来标注
   */
  areaListMouseenter($event) {
    this.showList = true;
  }
  /**
   * 移除隐藏标注
   * @param $event
   */
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
  }
}
