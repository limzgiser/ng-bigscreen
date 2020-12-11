import { DashboardRoutesModule } from './dashboard.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CityfunModule } from './../../cityfun/cityfun.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, DashboardRoutesModule, SharedModule, CityfunModule
  ],
  declarations: [	DashboardComponent,
 
   ]
})
export class DashboardModule { }
