import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoepleDashboardComponent } from './poeple-dashboard.component';
import { PeopleDashboardRoutes } from './people-dashboard.routing';
import {PopulationBriefComponent} from './population-brief/population-brief.component';
import {PopulationSexRatioComponent} from './population-sex-ratio/population-sex-ratio.component';
import {MobilePeopleComingComponent} from './mobile-people-coming/mobile-people-coming.component';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
@NgModule({
  imports: [
    CommonModule,PeopleDashboardRoutes,CityfunModule
  ],
  declarations: [
    PoepleDashboardComponent,
    PopulationBriefComponent,
    PopulationSexRatioComponent,
    MobilePeopleComingComponent]
})
export class PoepleDashboardModule { }
