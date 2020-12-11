import { Map2d3dComponent } from './mapbox-measure/map-2d-3d/map-2d-3d.component';
import { CoreMessageService } from './cityfun-services/core-message.service';
import { MapboxMeasureComponent } from './mapbox-measure/mapbox-measure.component';
import { MapboxDrawService } from './cityfun-services/mapbox-draw.service';
import { MapboxDrawToolComponent } from './mapbox-draw-tool/mapbox-draw-tool.component';
import { MapboxMapToolBarComponent } from './mapbox-map-tool-bar/mapbox-map-tool-bar.component';
import { CfMenuTopComponent } from './cf-menu-top/cf-menu-top.component';
import { UserAdminV1Component } from './cf-menu-top/user-admin-v1/user-admin-v1.component';
import { NavBarComponent } from './cf-menu-top/nav-bar/nav-bar.component';
import { MapboxMaptreeControlComponent } from './mapbox-maptree-control/mapbox-maptree-control.component';
import { CfTreeComponent } from './cf-tree/cf-tree.component';
import { FormsModule } from '@angular/forms';
import { MapToolComponent } from './mapbox-map-tool/mapbox-map-tool.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapboxMapComponent } from '../cityfun/mapbox-map/mapbox-map.component';
import { SharedModule } from '../shared/shared.module';
import { CfScrollComponent } from './cf-scroll/cf-scroll.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import { FilterPipe } from './nav-menu/filter.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  declarations: [
    MapToolComponent,
    CfTreeComponent,
    MapboxMapComponent,
    CfScrollComponent,
    MapboxMaptreeControlComponent,
    NavBarComponent,
    UserAdminV1Component,
    CfMenuTopComponent,
    MapboxMapToolBarComponent,
    MapboxDrawToolComponent,
    MapboxMeasureComponent,
    Map2d3dComponent,
    NavMenuComponent,
    FilterPipe
  ],
  exports: [
    MapToolComponent,
    CfTreeComponent,
    MapboxMapComponent,
    SharedModule,
    CfScrollComponent,
    MapboxMaptreeControlComponent,
    NavBarComponent,
    UserAdminV1Component,
    CfMenuTopComponent,
    MapboxMapToolBarComponent,
    MapboxDrawToolComponent,
    MapboxMeasureComponent,
    Map2d3dComponent,
    NavMenuComponent,
    FilterPipe
  ],
  providers: [
    MapboxDrawService,
    CoreMessageService
  ]
})
export class CityfunModule { }
