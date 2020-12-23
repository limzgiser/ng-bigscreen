import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';
@Component({
  selector: 'app-ent-portrayal',
  templateUrl: './ent-portrayal.component.html',
  styleUrls: ['./ent-portrayal.component.scss']
})
export class EntPortrayalComponent implements OnInit {

  constructor(private router: Router) { }
  menuData = [{
    "name": "企业聚集热度",
    "id": "heat",
    "active": true
  },
  {
    "name": "企业数量",
    "id": "count",
    "active": false
  },
  {
    "name": "企业聚类分析",
    "id": "analysis",
    "active": false
  }
  ]
  ngOnInit() {
  }
  routerToEmitter(e) {
    this.router.navigate([`./layout/ent-portrayal/${e.id}`]);
  }
}
