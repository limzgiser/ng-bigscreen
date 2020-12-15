import { Component, OnInit, Input } from '@angular/core';
import { PopulationDataService } from './../service/population-data.service'
@Component({
  selector: 'app-population-brief',
  templateUrl: './population-brief.component.html',
  styleUrls: ['./population-brief.component.scss']
})
export class PopulationBriefComponent implements OnInit {
  @Input() chartdataConfig;
  constructor(private populationDataService: PopulationDataService) { }

  ngOnInit() {
  }
  
}
