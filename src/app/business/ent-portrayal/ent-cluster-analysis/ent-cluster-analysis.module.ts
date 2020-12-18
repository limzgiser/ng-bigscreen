import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntClusterAnalysisComponent } from './ent-cluster-analysis.component';
import {EntClusterAnalysisRoutes} from './ent-cluster-analysis.routing';
@NgModule({
  imports: [
    CommonModule,EntClusterAnalysisRoutes
  ],
  declarations: [EntClusterAnalysisComponent]
})
export class EntClusterAnalysisModule { }
