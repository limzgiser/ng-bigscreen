import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleImportantComponent } from './people-important.component';
import { PeopleImportantRoutes } from './people-important.routing';

@NgModule({
  imports: [CommonModule, PeopleImportantRoutes],
  declarations: [PeopleImportantComponent],
})
export class PeopleImportantModule {}
