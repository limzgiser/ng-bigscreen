import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityEventComponent } from './city-event.component';
import { CityEventRoutes } from './city-event.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,CityEventRoutes,SharedModule
  ],
  declarations: [CityEventComponent]
})
export class CityEventModule { }
