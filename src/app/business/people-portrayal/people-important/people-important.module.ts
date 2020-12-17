import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleImportantComponent } from './people-important.component';
import { PeopleImportantRoutes } from './people-important.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
import {PeopleImportantChangeComponent} from './people-important-change/people-important-change.component';
import {PeopleImportantTypeComponent} from './people-important-type/people-important-type.component';
import {PeopleImportantCountComponent} from './people-important-count/people-important-count.component';
@NgModule({
  imports: [CommonModule, PeopleImportantRoutes,CityfunModule],
  declarations: [
    PeopleImportantComponent,
    PeopleImportantChangeComponent,
    PeopleImportantTypeComponent,
    PeopleImportantCountComponent
  ],
})
export class PeopleImportantModule {}
