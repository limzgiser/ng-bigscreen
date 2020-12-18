import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntCountComponent } from './ent-count.component';
import {EntCountRoutes} from './ent-count.routing';
@NgModule({
  imports: [
    CommonModule,EntCountRoutes
  ],
  declarations: [EntCountComponent]
})
export class EntCountModule { }
