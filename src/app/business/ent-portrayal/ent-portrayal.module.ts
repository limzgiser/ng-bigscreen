import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntPortrayalComponent } from './ent-portrayal.component';
import { EntPortrayalRoutes } from './ent-portrayal.routing';

@NgModule({
  imports: [
    CommonModule,EntPortrayalRoutes
  ],
  declarations: [EntPortrayalComponent]
})
export class EntPortrayalModule { }
