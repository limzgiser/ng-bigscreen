import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntPortrayalComponent } from './ent-portrayal.component';
import { EntPortrayalRoutes } from './ent-portrayal.routing';
import { CityfunModule } from 'src/app/cityfun/cityfun.module';
@NgModule({
  imports: [
    CommonModule,EntPortrayalRoutes,CityfunModule
  ],
  declarations: [EntPortrayalComponent]
})
export class EntPortrayalModule { }
