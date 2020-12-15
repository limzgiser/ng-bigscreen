import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePortrayalComponent } from './people-portrayal.component';
import { PeoplePortrayalRoutes } from './people-portrayal.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
@NgModule({
  imports: [
    CommonModule,
    PeoplePortrayalRoutes,
    CityfunModule 
  ],
  declarations: [PeoplePortrayalComponent]
})
export class PeoplePortrayalModule { }
