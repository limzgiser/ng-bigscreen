import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPortrayalComponent } from './city-portrayal.component';
import { CityPortrayalRoutes } from './city-portrayal.routing';

import { CityfunModule } from 'src/app/cityfun/cityfun.module';

@NgModule({
  imports: [
    CommonModule,
    CityfunModule,
    CityPortrayalRoutes
  ],
  declarations: [CityPortrayalComponent]
})
export class CityPortrayalModule { }
