import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoepleDashboardComponent } from './poeple-dashboard.component';
import { PeopleDashboardRoutes } from './people-dashboard.routing';

@NgModule({
  imports: [
    CommonModule,PeopleDashboardRoutes
  ],
  declarations: [PoepleDashboardComponent]
})
export class PoepleDashboardModule { }
