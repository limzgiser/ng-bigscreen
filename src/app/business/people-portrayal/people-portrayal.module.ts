import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePortrayalComponent } from './people-portrayal.component';
import { PeoplePortrayalRoutes } from './people-portrayal.routing';

@NgModule({
  imports: [
    CommonModule,
    PeoplePortrayalRoutes, 
  ],
  declarations: [PeoplePortrayalComponent]
})
export class PeoplePortrayalModule { }
