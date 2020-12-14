import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPortrayalComponent } from './city-portrayal.component';
import { CityPortrayalRoutes } from './city-portrayal.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule,
    CityPortrayalRoutes
  ],
  declarations: [CityPortrayalComponent]
})
export class CityPortrayalModule { }
