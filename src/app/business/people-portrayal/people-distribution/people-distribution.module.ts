import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDistributionComponent } from './people-distribution.component';
import { PeopleDistributionRoutes } from './people-distribution.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
import { AdmiDivisionComponent } from './admi-division/admi-division.component';
import { EducationLevelComponent } from './education-level/education-level.component';
import { SixPercentComponent } from './six-percent/six-percent.component';
import { PeopleMigrateComponent } from './people-migrate/people-migrate.component';

@NgModule({
  imports: [
    CommonModule,PeopleDistributionRoutes,CityfunModule
  ],
  declarations: [PeopleDistributionComponent,AdmiDivisionComponent,EducationLevelComponent,SixPercentComponent,PeopleMigrateComponent
  ]
})
export class PeopleDistributionModule { }
