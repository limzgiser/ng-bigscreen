import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-stastic-card-simpleness',
  templateUrl: './stastic-card-simpleness.component.html',
  styleUrls: ['./stastic-card-simpleness.component.scss']
})
export class StasticCardSimplenessComponent implements OnInit {

  @Input() data = {
    label:"",
    value:"",
    unit:''
  }
  constructor() { }

  ngOnInit() {
  }

}
