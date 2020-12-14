import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chart-title',
  templateUrl: './chart-title.component.html',
  styleUrls: ['./chart-title.component.scss']
})
export class ChartTitleComponent implements OnInit {
  @Input() chartTitle;
  @Input() unit;
  constructor() { }

  ngOnInit() {
  }

}
