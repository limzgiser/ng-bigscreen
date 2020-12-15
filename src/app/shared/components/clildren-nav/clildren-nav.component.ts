import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clildren-nav',
  templateUrl: './clildren-nav.component.html',
  styleUrls: ['./clildren-nav.component.scss']
})
export class ClildrenNavComponent implements OnInit {
  @Input() data;
  @Output() routerToEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }
  itemclick(item) {
    this.data.forEach(i => { i.active = false; });
    item.active = true;
    this.routerToEmitter.emit(item);
  }
}

