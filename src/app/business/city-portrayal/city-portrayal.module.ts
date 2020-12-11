import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPortrayalComponent } from './city-portrayal.component';
import { CityPortrayalRoutes } from './city-portrayal.routing';

@NgModule({
  imports: [
    CommonModule,
    CityPortrayalRoutes
  ],
  declarations: [CityPortrayalComponent]
})
export class CityPortrayalModule { }
