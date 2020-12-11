import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';


import { HttpClient } from '@angular/common/http';
const uri = './assets/config/main.config.json';
@Injectable({
  providedIn: 'root',
})
export class ServiceConfigService implements Resolve<any> {
  constructor(private http: HttpClient) { }

  resolve(): Observable<any> | Observable<never> {
    return this.http.get(uri).pipe(take(1), map((res: any) => {
            console.log(sessionStorage.getItem('main.config'));
      // sessionStorage.setItem('service.config', JSON      res.results);
      return res;
    }));
  }
}
