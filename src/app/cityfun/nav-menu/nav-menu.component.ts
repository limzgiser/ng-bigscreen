import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  constructor() { }
  @Input() style = null;
  @Output() routerToEmitter = new EventEmitter<any>();
  @Input() data = null;
  ngOnInit() {
  }
  menuRouter(item, jtem) {
    this.data.data.forEach(i => {
      i.active = false;
      i.children.forEach(j => {
        j.active = false;
      });
    });
    item.active = true;
    let outstr = item.id;
    if (jtem) {
      jtem.active = true;
      outstr += '/' + jtem.id;
    } else {
      if (item.children && item.children.length) {
        item.children[0].active = true;
      }
    }
    this.routerToEmitter.emit(outstr);
    event.stopPropagation();
  }
}
