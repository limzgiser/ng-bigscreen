import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';

@Injectable({
  providedIn: 'root',
})
export class MapboxmapService {
  styleinit = false;

  specialStyel = null;

  mapboxmap = null;

  constructor(private http: HttpClient, private cfhttpService: CfhttpService) {
    this.init().then((res) => {
      this.mapboxmap.on('load', () => {});
    });
  }
  /**
   * 底图初始化、单例创建地图、加载专题图配置文件
   */
  init() {
    let self = this;
    if (this.mapboxmap || this.specialStyel) {
      return new Promise((resolve, reject) => {
        resolve(this.mapboxmap);
      });
    } else {
      return Promise.all([
        this.getBaseMapStyle().then((style_base: any) => {
          return this.createSpMap(style_base);
        }),
      ]).then((res) => {
        return res[0];
      });
    }
  }

  /**
   * 获取底图样式配置文件
   */
  private getBaseMapStyle() {
    return this.cfhttpService.get('base.map').toPromise();
  }
  /**
   * 获取专题图样式配置文件
   */
  

  /**
   *
   * @param style  创建地图
   */
  private createSpMap(stylejson) {
    let self = this;
    return new Promise((resolve, reject) => {
      if (this.mapboxmap) {
        resolve(this.mapboxmap);
      } else {
        const tmpstyle = {
          container: 'mapboxmap',
          style: stylejson,
          // minZoom: 14,
          // "center": [120.715107, 31.159329],
          // pitch: 53.99999999999998,
          // bearing: -8.000000000000115,
        };
        self.mapboxmap = new cityfun.Map(tmpstyle);
        resolve(self.mapboxmap);
      }
    });
  }

  /**
   * 获取地图
   */
  public getMap() {
    return this.mapboxmap;
  }

  /**
   * 定位到目标
   */
  public setFlyTo(options) {
    this.mapboxmap.flyTo(options);
  }

  /**
   * 设置Pitch
   * @param num
   * @param options
   */
  public setPitch(num, options?) {
    this.mapboxmap.setPitch(num, options);
  }
  public removeLayerByIds(layerids: Array<string>, rimg = true) {
    if (this.mapboxmap) {
      for (let id of layerids) {
        // console.log(999, layerids);

        if (this.mapboxmap.getLayer(id)) {
          this.mapboxmap.removeLayer(id);
        }
        if (this.mapboxmap.getSource(id)) {
          this.mapboxmap.removeSource(id);
        }
        if (this.mapboxmap.hasImage(id) && rimg) {
          this.mapboxmap.removeImage(id);
        }
      }
    }
  }
}
