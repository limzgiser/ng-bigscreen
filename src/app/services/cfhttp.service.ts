import { Observable, Observer } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CfhttpService {
  sevConfig = null;
  sevCfgURL = '';
  constructor(private http: HttpClient) {
    this.sevCfgURL = JSON.parse(sessionStorage.getItem('main.config'))[
      'service-config'
    ];
  }
  /**
   * 服务配置文件
   */
  getSevConfig(): Observable<any> {
    if (this.sevConfig) {
      return of(this.sevConfig);
    } else {
      return this.http.get(this.sevCfgURL).pipe(
        map((res: any) => {
          this.sevConfig = res;
          return res;
        })
      );
    }
  }
  /**
   *
   * @param sevid;
   */
  get(serverId, options?: any): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      return this.getSevConfig().subscribe((data) => {
        const urlItem = data.list.find((item) => item.id === serverId);
        if (urlItem) {
          let url = this.getFullUrl(urlItem.url, this.sevConfig.host);
          return this.http.get(url, options).subscribe(
            (res) => {
              observer.next(res);
              observer.complete();
            },
            (err) => observer.error(err)
          );
        } else {
          return of(null);
        }
      });
    });
  }
  getFullUrl(url, hostdata) {
    if (url.indexOf('}}')>-1) {
      let urls = url.split('}}');
      let host = urls[0].split('{{')[1];
      let resHost = hostdata['{{' + host + '}}'];
      return resHost + urls[1];
    } else {
      return url;
    }
  }
}
