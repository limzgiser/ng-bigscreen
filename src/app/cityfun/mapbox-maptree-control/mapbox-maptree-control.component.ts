import { HttpClient } from '@angular/common/http';

import { MapboxmapService } from './../mapbox-map/service/mapboxmap.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';

@Component({
  selector: 'app-mapbox-maptree-control',
  templateUrl: './mapbox-maptree-control.component.html',
  styleUrls: ['./mapbox-maptree-control.component.scss'],
})
export class MapboxMaptreeControlComponent implements OnInit {
  mapboxglmap = null;
  constructor(
    private mapboxmapService: MapboxmapService,
    private cfhttpService: CfhttpService,
    private http: HttpClient
  ) {}
  defaultKeys: Array<string> = [];
  isLoadedDefaultLayers = false;
  nodes = null;
  private styleConfig = null;
  private symbolLayerIcons = null;
  private nodeKeyLayerids = null; // 图层树节点查询图层列表
  @Output() showLegend = new EventEmitter<any>();
  private legends = [];
  ngOnInit() {
    this.getConfig().then((results: any) => {
      this.nodes = results[0].data;
      this.styleConfig = results[1];
      // this.symbolLayerIcons = results[2];
      this.nodeKeyLayerids = results[2];
    });

    this.mapboxmapService.init().then((mapboxglmap: any) => {
      this.mapboxglmap = mapboxglmap;
      if (mapboxglmap.isStyleLoaded()) {
        this.mapInit();
      } else {
        mapboxglmap.on('load', () => {
          this.mapInit();
        });
      }
    });
  }

  // 地图初始化回调
  mapInit() {
    // 加载默认勾选图层
    this.addSpecialRes().then(() => {
      if (this.defaultKeys.length > 0 && !this.isLoadedDefaultLayers) {
        this.isLoadedDefaultLayers = true;
        const layerids = this.getLayerInfoByNodeKey(this.defaultKeys);
        this.showLegends(this.defaultKeys);
        layerids.forEach((key) => {
          const layer = this.getLayerStyByKey(key);
          if (!layer) {
            console.log(`未找到${key}对应的图层`);
            return;
          }
          this.addLayer(layer);
        });
      }
    });
    if (this.defaultKeys.length > 0 && !this.isLoadedDefaultLayers) {
      this.isLoadedDefaultLayers = true;
      const layerids = this.getLayerInfoByNodeKey(this.defaultKeys);
      this.showLegends(this.defaultKeys);
      layerids.forEach((key) => {
        const layer = this.getLayerStyByKey(key);
        if (!layer) {
          console.log(`未找到${key}对应的图层`);
          return;
        }
        this.addLayer(layer);
      });
    }
  }

  private addSpecialRes() {
    if (this.styleConfig) {
      if (this.styleConfig.sprite) {
        const spritUrl = this.styleConfig.sprite;
        return this.addImages(spritUrl);
      } else {
        return;
      }
    } else {
      this.getSpecialMapStyle().then((style) => {
        if (this.styleConfig.sprite) {
          const spritUrl = this.styleConfig.sprite;
          return this.addImages(spritUrl);
        } else {
          return;
        }
      });
    }
  }
  // 专题图雪碧图图片资源
  addImages(spritePath) {
    const self = this;
    return this.http
      .get(`${spritePath}.json`)
      .toPromise()
      .then((spriteJson) => {
        const img = new Image();
        img.onload = function () {
          Object.keys(spriteJson).forEach((key) => {
            const spriteItem = spriteJson[key];
            const { x, y, width, height } = spriteItem;
            const canvas = self.createCavans(width, height);
            const context = canvas.getContext('2d');
            context.drawImage(img, x, y, width, height, 0, 0, width, height);
            // 单位雪碧图项，转base64字符串
            const base64Url = canvas.toDataURL('image/png');
            self.mapboxglmap.loadImage(base64Url, (error, simg) => {
              if (!self.mapboxglmap.hasImage(key)) {
                self.mapboxglmap.addImage(key, simg);
              }
            });
          });
        };
        img.crossOrigin = 'anonymous';
        img.src = `${spritePath}.png`;
        return 1;
      });
  }
  createCavans(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  // cf-tree默认事件
  loadInitLayers(keys) {
    // 加载默认勾选图层
    this.defaultKeys = keys;
    if (
      this.mapboxglmap &&
      this.mapboxglmap.isStyleLoaded() &&
      !this.isLoadedDefaultLayers
    ) {
      this.isLoadedDefaultLayers = true;
      const layerids = this.getLayerInfoByNodeKey(this.defaultKeys);
      this.showLegends(this.defaultKeys);
      layerids.forEach((key) => {
        const layer = this.getLayerStyByKey(key);
        if (!layer) {
          console.log(`未找到${key}对应的图层`);
          return;
        }
        this.addLayer(layer);
      });
    }
  }
  /**
   * 根据key获取图层样式
   * @param key ；
   */
  private getLayerStyByKey(key) {
    const layer = this.styleConfig.layers.find((layer: any) => {
      return layer.id === key;
    });
    return layer;
  }
  selectLayers(nodekeys) {
    const layerids = this.getLayerInfoByNodeKey(nodekeys);
    this.showLegends(nodekeys);
    layerids.forEach((key) => {
      const layer = this.getLayerStyByKey(key);
      if (!layer) {
        console.log(`未找到${key}对应的图层`);
        return;
      }
      this.addLayer(layer);
    });
  }

  removeLayers(keys) {
    const layerids = this.getLayerInfoByNodeKey(keys);
    this.showLegends(keys, 'remove');
    this.mapboxmapService.removeLayerByIds(layerids);
  }
  // 显示图例
  showLegends(keys, rtype: 'remove' | 'add' = 'add') {
    const legneds = this.getLayerInfoByNodeKey(keys, 'legend');
    if (rtype === 'add') {
      this.legends.push(...legneds);
    } else {
      this.legends = this.legends.filter((i) => {
        return !(legneds.indexOf(i) > -1);
      });
    }
    this.showLegend.emit(this.legends);
  }
  private addLayer(layer) {
    const layersource = this.mapboxglmap.getSource(layer.source);
    if (!layersource) {
      this.mapboxglmap.addSource(
        layer.source,
        this.styleConfig.sources[layer.source]
      );
    }
    // if (layer.type === 'symbol' && !this.mapboxglmap.hasImage(layer.layout['icon-image'])) {
    //   this.addImageSource(layer).then(res => {
    //     this.mapboxglmap.addLayer(layer);
    //   });
    // } else {
    if (!layer) {
      return;
    }
    if (this.mapboxglmap.getLayer(layer.id)) {
      this.mapboxmapService.removeLayerByIds([layer.id]);
    }
    this.mapboxglmap.addLayer(layer);
    // }
  }
  // 添加图片资源
  // private addImageSource(layer) {
  //   if (this.symbolLayerIcons) {
  //     return this.addImage(layer);
  //   } else {
  //     return this.getIconsCofig().then(result => {
  //       this.symbolLayerIcons = result;
  //       return this.addImage(layer);
  //     });
  //   }
  // }
  // 添加source 图片
  // private addImage(layer) {
  //   const iconItem = _.find(this.symbolLayerIcons, item => {
  //     return item.id === layer.id;
  //   });
  //   return new Promise((r, j) => {
  //     if (layer.type === 'symbol' && !this.mapboxglmap.hasImage(layer.layout['icon-image'])) {
  //       this.mapboxglmap.loadImage(iconItem.url, (error, image) => {
  //         if (!image) {
  //           console.log('加载专题图片资源出错');
  //           j('加载专题图片资源出错');
  //           return;
  //         } else {
  //           this.mapboxglmap.addImage(layer.layout['icon-image'], image);
  //           r('添加图片资源成功!');
  //         }
  //       });
  //     } else {
  //       r('不是symbol图层');
  //     }
  //   });

  // }
  // 获取配置文件
  getConfig() {
    return Promise.all([
      this.getTreeConfig(),
      this.getSpecialMapStyle(),
      // this.getIconsCofig(),
      this.getTreeKeyLyrIdConfig(),
    ]);
  }
  // 获取树节点对应的图层Ids
  private getLayerInfoByNodeKey(nodeKeys, type: 'id' | 'legend' = 'id') {
    const ids = [];
    const legends = [];
    if (this.nodeKeyLayerids) {
      nodeKeys.forEach((nodekey) => {
        const fitem = this.nodeKeyLayerids.find(
          (item) => nodekey === item.nodeid
        );
        const layerids = fitem.layerid;
        const legend = fitem.legned;
        ids.push(...layerids);
        legends.push(...legend);
      });
      if (type === 'legend') {
        return legends;
      } else {
        return ids;
      }
    } else {
      console.log('图层树节点-图层ID配置文件未加载！！');
    }
  }

  treeSearch(node) {}
  // 图层书配置文件
  private getTreeConfig() {
    return this.cfhttpService.get('tree.config').toPromise();
  }
  // 专题图样式
  private getSpecialMapStyle() {
    return this.cfhttpService.get('special.map').toPromise();
  }
  // 专题图图标
  private getIconsCofig() {
    return this.cfhttpService.get('special.ions').toPromise();
  }
  // 图层树对应图层ID配置文件
  private getTreeKeyLyrIdConfig() {
    return this.cfhttpService.get('tree.key.layer.id').toPromise();
  }
  destroy(data) {
    const layerids = this.getLayerInfoByNodeKey(data);
    this.showLegends([]);
    this.mapboxmapService.removeLayerByIds(layerids);
  }
}
