
import { Component, OnInit } from '@angular/core';
import { MapboxmapService } from '../../cityfun/mapbox-map/service/mapboxmap.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private mapboxmapService:MapboxmapService) { }
  mapboxglmap=null;
  ngOnInit() {
    // this.mapboxmapService.init().then((mapboxglmap: any) => {
    //   this.mapboxglmap = mapboxglmap;
    //   if (mapboxglmap.isStyleLoaded() ) {
    //     // this.mapInit();
    //   }
    //   mapboxglmap.on('load', () => {
    //     // this.mapInit();
    //   });
    // });
  }

}
