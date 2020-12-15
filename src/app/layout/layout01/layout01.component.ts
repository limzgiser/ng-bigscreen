import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-layout01',
  templateUrl: './layout01.component.html',
  styleUrls: ['./layout01.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class Layout01Component implements OnInit {
  menuData = {
    logo: './assets/img/header/top-header.png',
    data: [],
  };

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        const urlArr = event.urlAfterRedirects.split('/');
        this.initRouter(urlArr);
      }
    });
  }

  ngOnInit() {
    this.resize();
    fromEvent(window,'resize').pipe(debounceTime(300)).subscribe((event) => {
   
       this.resize();
    });
    
  }
  private initRouter(routerArr) {
    this.activeNavBarSelect(routerArr);
  }
  routerToEmitter(e) {
    this.router.navigate([`./layout/${e}`]);
  }
  private activeNavBarSelect(routerArr) {
    if (this.menuData.data.length === 0) {
      this.menuData.data = JSON.parse(sessionStorage.getItem('menu.config'));
    }
    this.menuData.data.forEach((element) => {
      if (routerArr.indexOf(element.id) >= 0) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
  }
  resize() {
    let s = document.body.clientWidth / 3360;
    document.body.style.transformOrigin = '0 0';
    document.body.style.transform = 'scale(' + s + ',' + s + ')';
  }

  
}
