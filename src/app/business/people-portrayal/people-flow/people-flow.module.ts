import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleFlowComponent } from './people-flow.component';
import {IncomingOutofJsComponent} from './incoming-outof-js/incoming-outof-js.component';
import {IncomingInJsComponent} from './incoming-in-js/incoming-in-js.component';
import {PeopleFlowAgeComponent} from './people-flow-age/people-flow-age.component';
import {PeopleFlowCultureComponent} from './people-flow-culture/people-flow-culture.component';
import { PeopleFlowRoutes } from './people-flow.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
@NgModule({
  imports: [
    CommonModule,PeopleFlowRoutes,CityfunModule
  ],
  declarations: [
    PeopleFlowComponent,
    IncomingOutofJsComponent,
    IncomingInJsComponent,
    PeopleFlowAgeComponent,
    PeopleFlowCultureComponent
  ]
})
export class PeopleFlowModule { }
