import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDistributionComponent } from './people-distribution.component';
import { PeopleDistributionRoutes } from './people-distribution.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
import { AdmiDivisionComponent } from './admi-division/admi-division.component';

@NgModule({
  imports: [
    CommonModule,PeopleDistributionRoutes,CityfunModule
  ],
  declarations: [PeopleDistributionComponent,AdmiDivisionComponent]
})
export class PeopleDistributionModule { }
