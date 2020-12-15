import { Component, OnInit } from '@angular/core';
import { CfhttpService } from 'src/app/services/cfhttp.service';
@Component({
  selector: 'app-city-portrayal',
  templateUrl: './city-portrayal.component.html',
  styleUrls: ['./city-portrayal.component.scss'],
})
export class CityPortrayalComponent implements OnInit {
  constructor(private cfhttpService: CfhttpService) {}
 
  ngOnInit() {
     
  }

}