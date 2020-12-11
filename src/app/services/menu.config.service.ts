import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const uri = './assets/config/menu.config.json';
@Injectable({
  providedIn: 'root',
})
export class MenuConfigService implements Resolve<any> {
  constructor(private http: HttpClient) { }
  resolve(): Observable<any> | Observable<never> {
    return this.http.get(uri).pipe(take(1), map((res: any) => {
      sessionStorage.setItem('menu.config', JSON.stringify(res.data) );
      return res;
    }));
  }
}
