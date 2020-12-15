import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityEventComponent } from './city-event.component';
import { CityEventRoutes } from './city-event.routing';

@NgModule({
  imports: [
    CommonModule,CityEventRoutes
  ],
  declarations: [CityEventComponent]
})
export class CityEventModule { }
