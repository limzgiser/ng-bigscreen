import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPlaneComponent } from './city-plane.component';
import { CityPlaneRoutes } from './city-plane.routing';

@NgModule({
  imports: [
    CommonModule,CityPlaneRoutes
  ],
  declarations: [CityPlaneComponent]
})
export class CityPlaneModule { }
