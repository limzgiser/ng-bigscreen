import { Observable, Observer } from 'rxjs';
import { of, } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SevCfgURL } from '../types/urlcfg';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CfhttpService {
  sevConfig = null;
  constructor(private http: HttpClient) { }
  /**
   * 服务配置文件
   */
  getSevConfig(): Observable<any> {
    if (this.sevConfig) {
      return of(this.sevConfig);
    } else {
      return this.http.get(SevCfgURL).pipe(
        map((res: any) => {
          this.sevConfig = res.data;
          return res.data;
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
      return this.getSevConfig().subscribe(sevlist => {
        const urlItem = sevlist.find(item => item.id === serverId);
        if (urlItem) {
          return this.http.get(urlItem.url, options).subscribe(res => {
            observer.next(res);
            observer.complete();
          }, err => observer.error(err));
        } else {
          return of(null);
        }
      });
    });
  }
}
