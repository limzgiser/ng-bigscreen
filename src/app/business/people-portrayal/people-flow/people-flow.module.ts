import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFlowComponent } from './people-flow.component';
import { PeopleFlowRoutes } from './people-flow.routing';

@NgModule({
  imports: [
    CommonModule,PeopleFlowRoutes
  ],
  declarations: [PeopleFlowComponent]
})
export class PeopleFlowModule { }
