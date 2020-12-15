import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDistributionComponent } from './people-distribution.component';
import { PeopleDistributionRoutes } from './people-distribution.routing';

@NgModule({
  imports: [
    CommonModule,PeopleDistributionRoutes
  ],
  declarations: [PeopleDistributionComponent]
})
export class PeopleDistributionModule { }
